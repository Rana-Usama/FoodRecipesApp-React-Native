import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Fontisto } from "@expo/vector-icons";

//config
import Colors from "../../config/Colors";

function InputFields({
  title,
  iconName,
  handleFeild,
  value,
  iconColor = Colors.white,
  titleColor = Colors.white,
}) {
  return (
    <View
      style={{ width: "75%", justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          alignSelf: "flex-start",
          flexDirection: "row",
          marginBottom: RFPercentage(2),
        }}
      >
        <Fontisto
          name={iconName}
          size={RFPercentage(3.7)}
          color={iconColor}
          style={{ alignSelf: "center" }}
        />
        <TextInput
          placeholder={title}
          placeholderTextColor={Colors.white}
          onChangeText={(text) => handleFeild(text)}
          value={value}
          style={{
            color: titleColor,
            fontSize: RFPercentage(2.4),
            width: "100%",
            marginLeft: RFPercentage(3),
            alignSelf: "center",
          }}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: RFPercentage(0.2),
          backgroundColor: Colors.inputFieldBottom,
          marginBottom: RFPercentage(4),
        }}
      ></View>
    </View>
  );
}

export default InputFields;
