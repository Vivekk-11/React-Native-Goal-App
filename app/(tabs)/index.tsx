import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

interface Goal {
  key: string;
  text: string;
}

export default function HomeScreen() {
  const [enteredGoalText, setEnteredGoalText] = useState<Goal>({
    text: "",
    key: "",
  });
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText({ text: enteredText, key: `${Math.random()}` });
  };

  const addGoalHandler = () => {
    setCourseGoals((prev) => [...prev, enteredGoalText]);
    setEnteredGoalText({ text: "", key: "" });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText.text}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={({ item }: { item: Goal }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{item.text}</Text>
            </View>
          )}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "white",
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    margin: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
