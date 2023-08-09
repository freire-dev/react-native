import { View, StyleSheet, Text, Pressable, Platform } from "react-native";

const CategoryGridTitle = ({ title, color, onPress }) => {

  return (
    <>
      <View style={styles.container}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visibile",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
