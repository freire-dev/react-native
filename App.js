import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gamesIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = (
    <StartGame
      onPickNumber={pickedNumberHandler}
      onGameOver={gameOverHandler}
    />
  );

  if (userNumber) {
    screen = <GameScreen number={userNumber} />;
  }

  if (gamesIsOver && userNumber) {
    screen = <GameOver />;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {/* Coloca uma boa margem (espaçamento) padrão para diferentes telas */}
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
