import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const StartAddGoal = () => {
    setModalIsVisible(true);
  };

  const endAddGoal = () => {
    setModalIsVisible(false);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    enteredGoalText != ""
      ? setGoals((currentGoals) => [
          ...currentGoals,
          { text: enteredGoalText, id: Math.random().toString() },
        ])
      : "";
    setEnteredGoalText("");
    endAddGoal();
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Adicione uma tarefa"
          color={"#5e0acc"}
          onPress={StartAddGoal}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          enteredGoalText={enteredGoalText}
          visible={modalIsVisible}
          endAddGoal={endAddGoal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  itemData={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 15,
  },
});
