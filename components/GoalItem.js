import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ id, itemData, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "#dddd" }}
        onPress={deleteGoalHandler.bind(this, id)}
      >
        <Text style={styles.goalText}>{itemData}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  }
});

export default GoalItem;
