import { Goal } from "@/app/(tabs)";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

interface Props {
  item: Goal;
  handleDelete: (id: string) => void;
}

const GoalItem = ({ item, handleDelete }: Props) => {
  const handlePress = () => {
    handleDelete(item.key);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={handlePress}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});

export default GoalItem;
