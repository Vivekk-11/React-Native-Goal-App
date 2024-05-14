import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

interface Props {
  inputHandler: (text: string) => void;
  handleSubmit: () => void;
  goalText: string;
  visible: boolean;
  closeModal: (value: false) => void;
}

const GoalInput = ({
  inputHandler,
  goalText,
  handleSubmit,
  visible,
  closeModal,
}: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={inputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => closeModal(false)} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    padding: 8,
    margin: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  button: {
    width: "30%",
    marginHorizontal: 16,
  },
});

export default GoalInput;
