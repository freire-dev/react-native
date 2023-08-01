import { Text, StyleSheet } from "react-native";

const Title = ({ name }) => {
  return (
    <>
      <Text style={styles.title}>{name}</Text>
    </>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: 'open-sans-bold',
    color: '#fff',
    padding: 12,
    borderWidth: 2,
    borderColor: '#fff',
    textAlign: "center"
  },
});
