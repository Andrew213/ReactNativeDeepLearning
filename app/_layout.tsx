import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import "./global.css";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function RooyLayout() {
  const { height, width, scale, fontScale } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const w = width / 2 - 5;
  return (
    <SafeAreaProvider>
      <View className="flex-1 justify-end bg-black">
        <Image
          source={require("../assets/main.png")}
          resizeMode="cover"
          className="absolute top-0 left-0 w-full"
          style={{
            height: "62%",
          }}
        />

        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.45)", "#000000", "#000000"]}
          locations={[0, 0.45, 0.75, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute inset-0"
        />

        <SafeAreaView edges={["top", "bottom"]}>
          <View className="  px-[30px]">
            <View className="gap-2">
              <Text className="font-semibold text-center text-white text-[34px]">
                Один из самых вкусных кофе в городе!
              </Text>

              <Text
                className="text-center px-4 text-[#a9a9a9]"
                style={{
                  lineHeight: 25,
                }}
              >
                Свежие зёрна, настоящая арабика и бережная обжарка
              </Text>
            </View>

            <TouchableOpacity className="bg-card rounded-2xl mt-6 py-[21px] mb-4">
              <Text className="text-white font-semibold text-[16px] text-center">
                Начать
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
