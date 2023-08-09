import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const MealDetail = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const [saved, setSaved] = useState(true);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonHandler = () => {
    saved ? setSaved(false) : setSaved(true);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable>
            <Ionicons
              name={saved ? "star-outline" : "star"}
              size={24}
              color="white"
              onPress={headerButtonHandler}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
              <View key={ingredient} style={styles.listItem}>
                <Text style={styles.itemText}>{ingredient}</Text>
              </View>
            ))}
            <Text style={styles.subtitle}>Steps</Text>
            {selectedMeal.steps.map((step) => (
              <View key={step} style={styles.listItem}>
                <Text style={styles.itemText}>{step}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
