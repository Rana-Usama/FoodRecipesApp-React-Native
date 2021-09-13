import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

function MyAppButton({
  title,
  onPress = () => {},
  backgroundColor,
  width = "100%",
  padding = RFPercentage(1.5),
  color,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        width: width,
        borderRadius: RFPercentage(30),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center", //most important
        padding: padding,
      }}
    >
      <Text
        style={{
          fontSize: RFPercentage(2.5),
          color: color,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default MyAppButton;
