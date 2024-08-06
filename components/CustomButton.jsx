import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLOading}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      className={`mt-8 bg-secondary rounded-xl min-h-[62px] justify-center items-center items-center ${containerStyles} ${isLOading ? 'opacity-50' : ''}` }
    disabled={isLOading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
