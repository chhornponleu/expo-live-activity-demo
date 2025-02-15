// Import the native module. On web, it will be resolved to LiveActivityControls.web.ts
// and on native platforms to LiveActivityControls.ts 

import LiveActivityControlsModule from './src/LiveActivityControlsModule';


export function areActivitiesEnabled(): boolean {
  return LiveActivityControlsModule.areActivitiesEnabled();
}

interface StartActivityOptions {
  startTime: Date;
  endTime: Date;
  title: string;
  headline: string;
  widgetUrl: string;
}

interface EndActivityOptions {
  title: string;
  headline: string;
  widgetUrl: string;
}

/**
 * Starts an iOS Live Activity.
 * @param options Options for the activity.
 */
export function startActivity(options: StartActivityOptions): boolean {
  return startActivityInner(
    Math.floor(options.startTime.getTime() / 1000),
    Math.floor(options.endTime.getTime() / 1000),
    options.title,
    options.headline,
    options.widgetUrl
  );
}

function startActivityInner(
  startTime: number,
  endTime: number,
  title: string,
  headline: string,
  widgetUrl: string
): boolean {
  return LiveActivityControlsModule.startActivity(
    startTime,
    endTime,
    title,
    headline,
    widgetUrl
  );
}

/**
 * Ends an iOS Live Activity.
 * @param options Options for the activity.
 */
export function endActivity(options: EndActivityOptions): void {
  endActivityInner(options.title, options.headline, options.widgetUrl);
}

function endActivityInner(
  title: string,
  headline: string,
  widgetUrl: string
): void {
  LiveActivityControlsModule.endActivity(title, headline, widgetUrl);
}