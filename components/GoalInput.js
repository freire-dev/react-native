import { View, TextInput, Button, StyleSheet, Modal, Image} from "react-native";
import GoalImage from "../assets/images/goal.png"

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  enteredGoalText,
  visible,
  endAddGoal,
}) => {
  return (
    <>
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={GoalImage}/>
          <TextInput
            value={enteredGoalText}
            style={styles.textInput}
            placeholder="Seu objetivo..."
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Adicionar" onPress={addGoalHandler} color="#b180f0"/>
            </View>
            <View style={styles.button}>
              <Button title="Cancelar" onPress={endAddGoal} color="#f31282"/>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    backgroundColor: "#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    height: "7%",
    marginRight: 8,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#000",
    borderRadius: 6,
    padding: 16
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 30,
    marginTop: 16,
  },
  button: {
    width: '35%',
    marginHorizontal: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});

export default GoalInput;
