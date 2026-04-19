import {SetStateAction, useEffect, useRef, useState} from "react";
import {Animated, Text} from "react-native";

interface Props {
  text: string;
  onNotificationHide: React.Dispatch<SetStateAction<string>>;
}

const Notification: React.FC<Props> = ({text, onNotificationHide}) => {
  const [isShown, setIsShown] = useState(false);
  const [animatedStyle] = useState(() => new Animated.Value(0));

  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const transform = animatedStyle.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const opacity = animatedStyle.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animate = (toValue: number) => {
    animatedStyle.stopAnimation();

    setIsAnimating(true);

    Animated.timing(animatedStyle, {
      toValue,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      if (toValue === 0) {
        setIsShown(false);
        setIsAnimating(false);
        onNotificationHide("");
      }
    });
  };

  useEffect(() => {
    if (!text) {
      return;
    }

    setIsShown(true);

    animate(1);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      animate(0);
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current); // Очищаем старый таймер
      }
    };
  }, [text]);

  if (!isShown && !isAnimating) {
    return null;
  }
  return (
    <Animated.View
      className="absolute bg-red-600 w-full p-3.75 top-12.5"
      style={{opacity, transform: [{translateY: transform}]}}>
      <Text className="text-white text-center text-[16px]">{text}</Text>ф
    </Animated.View>
  );
};

export default Notification;
