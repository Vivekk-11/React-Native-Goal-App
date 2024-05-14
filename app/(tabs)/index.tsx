import GoalInput from "@/components/GoalInput";
import GoalItem from "@/components/GoalItem";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export interface Goal {
  key: string;
  text: string;
}

export default function HomeScreen() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
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
    setModalIsVisible(false);
  };

  const handleDelete = (id: string) => {
    const filteredGoals = courseGoals.filter((goal) => goal.key !== id);
    setCourseGoals(filteredGoals);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal!"
          color="#5e0acc"
          onPress={() => setModalIsVisible(true)}
        />
        <GoalInput
          visible={modalIsVisible}
          inputHandler={goalInputHandler}
          goalText={enteredGoalText.text}
          handleSubmit={handleSubmit}
          closeModal={setModalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.key}
            renderItem={({ item }: { item: Goal }) => (
              <GoalItem item={item} handleDelete={handleDelete} />
            )}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});
