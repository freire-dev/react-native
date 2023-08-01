import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const GameScreen = ({ number, onGameOver }) => {
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  let minBoundary = 1;
  let maxBoundary = 100;

  const initialGuess = generateRandomBetween(1, 100, number);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === number) {
      onGameOver();
    }
  }, [currentGuess, number, onGameOver]);

  const nextGuessHandler = (direction) => {
    // direction => 'lower' or 'greater'
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "greater") & (currentGuess > number)
    ) {
      Alert.alert("Don't Lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <>
      <View style={styles.screen}>
        <View>
          <Title name="Opponent's Guess" />
        </View>
        <View style={styles.container}>
          <NumberContainer number={currentGuess} />
          <Text style={styles.question}>Higher or lower?</Text>
          <View style={styles.buttons}>
            <PrimaryButton
              name={<Ionicons name="md-remove" size={20} color="white" />}
              functionBtn={nextGuessHandler.bind(this, "lower")}
            />
            <PrimaryButton
              name={<Ionicons name="md-add" size={20} color="white" />}
              functionBtn={nextGuessHandler.bind(this, "greater")}
            />
          </View>
        </View>
        <View>
          <Text>LOG Rounds</Text>
        </View>
      </View>
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    alignItems: "center",
  },
  question: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
  container: {
    backgroundColor: Colors.primary800,
    height: 350,
    padding: 35,
    margin: 30,
    borderRadius: 20,
  },
});
