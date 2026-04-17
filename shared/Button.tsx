import { cn } from "@/utils/cn";
import {
  Text,
  Touchable,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  text: string;
}
const Button: React.FC<Props> = ({ text, className, ...rest }) => {
  return (
    <TouchableOpacity
      className={cn("bg-primary rounded-2xl mt-6 py-[21px] mb-4", className)}
      {...rest}
    >
      <Text className="text-white font-semibold text-[16px] text-center">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
