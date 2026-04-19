import {useLocalSearchParams} from "expo-router";
import {Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Item = () => {
  const {id} = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text className="text-white">ID: {id}</Text>
    </SafeAreaView>
  );
};

export default Item;
