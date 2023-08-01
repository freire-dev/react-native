import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const GameOver = () => {
  return (
    <>
      <View style={styles.screen}>
        <Text style={styles.title}>Game Over</Text>
      </View>
    </>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  title: {
    color: "#fff",
  },
});
