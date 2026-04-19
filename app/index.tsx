import {LinearGradient} from "expo-linear-gradient";
import {Link} from "expo-router";
import {useEffect, useState} from "react";
import {Animated, Image, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {images} from "@/assets";
import Button from "@/shared/Button";

export default function Index() {
  const [animatedStyle] = useState(() => new Animated.Value(0));

  const opacity = animatedStyle.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = animatedStyle.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  });

  const animate = (toValue: number) => {
    Animated.timing(animatedStyle, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate(1);
  }, []);

  return (
    <>
      <View className="flex-1 justify-end ">
        <Image
          source={images.main}
          resizeMode="cover"
          className="absolute top-0 left-0 w-full"
          style={{
            height: "62%",
          }}
        />

        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.45)", "#000000", "#000000"]}
          locations={[0, 0.45, 0.75, 1]}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          className="absolute inset-0"
        />

        <SafeAreaView edges={["top", "bottom"]}>
          <View className="px-[30px]">
            <View className="gap-2">
              <Animated.Text
                style={{
                  transform: [{translateY}],
                  opacity,
                }}
                className=" font-sora-semiBold text-center text-white text-[34px]">
                Один из самых вкусных кофе в городе!
              </Animated.Text>

              <Text className="text-center font-sora px-4 text-text-gray">
                Свежие зёрна, настоящая арабика и бережная обжарка
              </Text>
            </View>
            <Link href={"/catalog"} asChild>
              <Button text="Начать" />
            </Link>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
