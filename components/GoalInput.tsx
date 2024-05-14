import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={inputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => closeModal(false)}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleSubmit} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#311b6b",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
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
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});

export default GoalInput;
