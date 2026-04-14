import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={style.container}>
      <Text>Bla bla bla</Text>
      <StatusBar barStyle="default" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
