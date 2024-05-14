import { StyleSheet, View, Button, TextInput } from "react-native";

interface Props {
  inputHandler: (text: string) => void;
  handleSubmit: () => void;
  goalText: string;
}

const GoalInput = ({ inputHandler, goalText, handleSubmit }: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={inputHandler}
        value={goalText}
      />
      <Button title="Add Goal" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
