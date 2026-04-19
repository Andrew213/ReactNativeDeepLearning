import {Link} from "expo-router";
import {Text, View} from "react-native";

export default function CatalogScreen() {
  return (
    <View style={{flex: 1, padding: 36}}>
      <Link
        href={{
          pathname: "/catalog/[id]",
          params: {id: "capuchino"},
        }}>
        <Text className="text-white">To item</Text>
      </Link>
    </View>
  );
}
