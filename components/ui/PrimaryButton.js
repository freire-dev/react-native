import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ name, functionBtn }) => {
  return (
    <>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.pressed, styles.buttonContainer]
              : styles.buttonContainer
          }
          onPress={functionBtn}
          android_ripple={{ color: Colors.primary600 }}
        >
          {/* Android Ripple dá o efeito de cor ao clicar no botão apenas para dispositivos android*/}
          <Text style={styles.textButton}>{name}</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
    width: 130,
    height: 32,
    borderRadius: 20,
    elevation: 4,
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    paddingVertical: 6, //Alinha verticalmente o texto do botão
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
