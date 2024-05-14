import { Goal } from "@/app/(tabs)";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

interface Props {
  item: Goal;
  handleDelete: (id: string) => void;
}

const GoalItem = ({ item, handleDelete }: Props) => {

  const handlePress = () => {
    handleDelete(item.key)
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default GoalItem;
