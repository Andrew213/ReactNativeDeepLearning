import {Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function SuccessScreen() {
  return (
    <SafeAreaView style={{flex: 1, padding: 36}}>
      <Text className="text-white">SuccessScreen</Text>
    </SafeAreaView>
  );
}
