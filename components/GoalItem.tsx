import { Goal } from "@/app/(tabs)";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({item}: {item: Goal}) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
    </View>
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
