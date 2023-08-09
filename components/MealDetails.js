import { View, Text, StyleSheet } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <>
      <View style={[styles.mealItemDetails, style]}>
        <Text style={[styles.detailItem, textStyle]}>{duration}min</Text>
        <Text style={[styles.detailItem, textStyle]}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={[styles.detailItem, textStyle]}>
          {affordability.toUpperCase()}
        </Text>
      </View>
    </>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  mealItemDetails: {
    flexDirection: "row",
    padding: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailItem: {
    marginHorizontal: 4,
  },
});
