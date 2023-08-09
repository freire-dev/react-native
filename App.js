import { Button, StyleSheet, Text } from "react-native";
import Categories from "./screens/Categories";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetail from "./screens/MealDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          {/* "initialRouteName" -> Atributo passado para apontar a tela inicial do app */}
          <Stack.Screen
            name="MealsCategories"
            component={Categories}
            options={{
              title: "All categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen name="MealDetail" component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
