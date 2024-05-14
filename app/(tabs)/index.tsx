import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.textStyle}>Hello World!!!</Text>
      <Text style={styles.textStyle}>How are you doing?</Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textStyle: {
    margin: 16,
    padding: 8,
    borderColor: "red",
    borderWidth: 1,
  },
});
