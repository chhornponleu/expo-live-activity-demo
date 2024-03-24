import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { areActivitiesEnabled, endActivity, startActivity } from "./modules/live-activity-controls";

export default function App() {

  async function handleStartActivityPress() {
    if (areActivitiesEnabled()) {
      alert('Activity supported')
      startActivity({
        startTime: new Date(),
        endTime: new Date(Date.now() + 1000 * 60 * 60),
        headline: "Example headline",
        title: "Example title",
        widgetUrl: "www.google.com",
      });
    }
    else {
      alert('Activity not supported')
    }
  }

  async function handleEndActivityPress() {
    if (areActivitiesEnabled()) {
      alert('Activity supported')
      endActivity({
        headline: "Example headline end",
        title: "Example title end",
        widgetUrl: "www.google.com",
      });
    }
    else {
      alert('Activity not supported')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Start activity"
        onPress={handleStartActivityPress}
      />
      <Button
        title="End activity"
        onPress={handleEndActivityPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
