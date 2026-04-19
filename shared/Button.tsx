import { cn } from "@/utils/cn";
import { useMemo, useRef } from "react";
import { Animated, Pressable, Text, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  text: string;
}
const Button: React.FC<Props> = ({ text, className, ...rest }) => {
  const animatedStyle = useRef(new Animated.Value(0)).current;
  const scale = animatedStyle.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  });

  const backgroundColor = animatedStyle.interpolate({
    inputRange: [0, 1],
    outputRange: ["#C67C4E", "#A76237"],
  });

  const opacity = animatedStyle.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });

  const animate = (toValue: number) => {
    Animated.timing(animatedStyle, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      {...rest}
      onPressIn={(e) => {
        animate(1);
        rest.onPressIn?.(e);
      }}
      onPressOut={(e) => {
        animate(0);
        rest.onPressOut?.(e);
      }}
    >
      <Animated.View
        className={cn("bg-primary rounded-2xl mt-6 py-[21px] mb-4", className)}
        style={{
          opacity,
          backgroundColor,
          transform: [{ scale: scale }],
        }}
      >
        <Text className="text-white font-semibold text-[16px] text-center">
          {text}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default Button;
