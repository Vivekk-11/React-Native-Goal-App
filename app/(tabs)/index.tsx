import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

export interface Goal {
  key: string;
  text: string;
}

export default function HomeScreen() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const [enteredGoalText, setEnteredGoalText] = useState<Goal>({
    text: "",
    key: "",
  });

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText({ text: enteredText, key: `${Math.random()}` });
  };


  const handleSubmit = () => {
    setCourseGoals((prev) => [...prev, enteredGoalText]);
    setEnteredGoalText({ text: "", key: "" });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        inputHandler={goalInputHandler}
        goalText={enteredGoalText.text}
        handleSubmit={handleSubmit}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.key}
          renderItem={({ item }: { item: Goal }) => <GoalItem item={item} />}
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
  goalsContainer: {
    flex: 4,
  },
});
