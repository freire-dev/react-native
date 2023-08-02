import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  Platform,
} from "react-native";
import Colors from "../../constants/colors";

const widthWindow = Dimensions.get("window").width;
// pegar a largura do dispositivo. window = tela sem a statusbar e
//screen =  são as dimensões da statusbar + tela
//obs: Não atualiza quando as dimensões do app atualizam

const { width, height } = useWindowDimensions();
//pega a info. de largura e altura da tela
//obs: atualiza quando as dimensões do app atualizam (MELHOR OPÇÃO)

const NumberContainer = ({ number }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
    </>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: widthWindow < 450 ? 12 : 24,
    margin: Platform.OS == "android" ? 24 : Platform.OS == "ios" ? 26 : 24, //Para identificar o sistema operacional do celular
    borderRadius: Platform.select({ ios: 8, android: 10 }), //Outra forma de declarar valores diferentes para atributos de estilos para diferentes sistemas operacionais de celulares
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
