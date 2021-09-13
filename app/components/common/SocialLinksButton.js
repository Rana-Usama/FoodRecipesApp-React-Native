import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

//config
import Colors from "../../config/Colors";

// google img
// import googleLogo from "../../assets/images/googleLogo.png";

function SocialLinksButtons({
  onPress = () => {},
  iconName,
  title,
  backgroundColor = Colors.white,
  width = RFPercentage(37),
  height = RFPercentage(6.5),
  borderColor = null,
  borderWidth = 0,
  titleColor,
  iconColor,
  iconSize = RFPercentage(2.2),
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        marginVertical: RFPercentage(1),
        borderRadius: RFPercentage(20),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}
    >
      <FontAwesome
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={{ left: RFPercentage(-8) }}
      />

      <Text
        style={{
          color: titleColor,
          fontSize: RFPercentage(2),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default SocialLinksButtons;
