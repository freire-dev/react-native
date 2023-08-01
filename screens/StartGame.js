import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

const StartGame = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <>
      <View style={styles.title}>
        <Title name="Guess My Number" />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Enter a number</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsArea}>
          <PrimaryButton name={"Reset"} functionBtn={resetInputHandler} />
          <PrimaryButton name={"Confirm"} functionBtn={confirmInputHandler} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 25,
    marginTop: 50
  },
  text:{
    color: Colors.accent500,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  container: {
    marginHorizontal: 20,
    marginVertical: "20%",
    padding: 40,
    marginTop: -5,
    backgroundColor: Colors.primary800,
    elevation: 8,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    borderColor: Colors.accent500,
    borderBottomWidth: 2,
    marginBottom: 40,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 32,
    width: 50,
    textAlign: "center",
    alignSelf: "center",
  },
  buttonsArea: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});

export default StartGame;
