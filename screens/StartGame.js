import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGame = () => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttonsArea}>
          <PrimaryButton name={"Reset"} />
          <PrimaryButton name={"Confirm"} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: "50%",
    padding: 40,
    backgroundColor: "#3b021f",
    elevation: 8,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    borderColor: "#ddb52f",
    borderBottomWidth: 2,
    marginBottom: 40,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 32,
    width: 50,
    textAlign: "center",
    alignSelf: "center"
  },
  buttonsArea: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});

export default StartGame;
