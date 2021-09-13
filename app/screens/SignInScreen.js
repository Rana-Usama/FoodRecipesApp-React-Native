import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";

//images
import backgroundImage from "../assets/signin.png";
import InputFields from "./../components/common/InputFields";
import { RFPercentage } from "react-native-responsive-fontsize";
import MyAppButton from "./../components/common/MyAppButton";
import Colors from "../config/Colors";
import LoadingModal from "./../components/common/LoadingModel";

function SignInScreen(props) {
  const [indicator, showIndicator] = useState(false);
  const [inputField, SetInputField] = useState([
    {
      placeholder: "Email",
      iconName: "email",
      value: "",
    },
    {
      placeholder: "Password",
      iconName: "email",
      value: "",
    },
  ]);

  const handleChange = (text, i) => {
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  const handleLogin = () => {
    showIndicator(true);
    let tempfeilds = [...inputField];

    if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
      alert("Please fill all the feilds");
      showIndicator(false);
      return true;
    }

    //password must contain 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!tempfeilds[1].value.match(passw)) {
      alert("Week password try another one!");
      showIndicator(false);
      return true;
    }

    try {
      // API integration
    } catch (error) {
      alert("Login Error");
    }

    showIndicator(false);
  };

  return (
    <>
      <LoadingModal show={indicator} />
      {/* BackgroundImage */}
      <ImageBackground
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        source={backgroundImage}
      >
        {/* InputFields */}
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: RFPercentage(35),
          }}
        >
          {inputField.map((item, i) => (
            <InputFields
              key={i}
              title={item.placeholder}
              iconName={item.iconName}
              handleFeild={(text) => handleChange(text, i)}
              value={item.value}
            />
          ))}
        </View>

        {/* SigninButton */}
        <View style={{ width: "100%", marginTop: RFPercentage(2) }}>
          <MyAppButton
            title="SIGNIN"
            onPress={() => handleLogin()}
            backgroundColor={Colors.primary}
            width="75%"
            padding={RFPercentage(1.9)}
            color={Colors.black}
          />
        </View>

        <TouchableOpacity
          style={{ width: "100%", position: "absolute", bottom: 30 }}
          onPress={() => props.navigation.navigate("SignUpScreen")}
        >
          <Text
            style={{
              color: Colors.white,
              alignSelf: "center",
            }}
          >
            Still not registered? Please Sign up
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

export default SignInScreen;
