import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";

//images
import backgroundImage from "../assets/signin.png";
import InputFields from "./../components/common/InputFields";
import { RFPercentage } from "react-native-responsive-fontsize";
import MyAppButton from "./../components/common/MyAppButton";
import Colors from "../config/Colors";
import LoadingModal from "./../components/common/LoadingModel";
import SocialLinksButtons from "../components/common/SocialLinksButton";

function SignInScreen(props) {
  const [indicator, showIndicator] = useState(false);
  const [inputField, SetInputField] = useState([
    {
      placeholder: "Email",
      iconName: "email",
      value: "",
    },
    {
      placeholder: "Username",
      iconName: "email",
      value: "",
    },
    {
      placeholder: "Password",
      iconName: "email",
      value: "",
    },
    {
      placeholder: "Confirm Password",
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
    if (!tempfeilds[2].value.match(passw)) {
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
        style={{ flex: 1, position: "absolute", width: "100%", height: "100%" }}
        source={backgroundImage}
      >
        {/* InputFields */}
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: RFPercentage(30),
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
        <View
          style={{
            width: "100%",
            marginTop: RFPercentage(2),
          }}
        >
          <MyAppButton
            title="Create Account"
            onPress={() => handleLogin()}
            backgroundColor={Colors.primary}
            width="75%"
            padding={RFPercentage(1.9)}
            color={Colors.black}
          />
        </View>

        {/* Text */}
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: RFPercentage(14),
          }}
          onPress={() => props.navigation.navigate("SignUpScreen")}
        >
          <Text
            style={{
              color: Colors.white,
              alignSelf: "center",
            }}
          >
            Or you still can
          </Text>
        </View>

        {/* Social Link */}
        <View
          style={{
            width: "100%",
            marginTop: RFPercentage(3),
            position: "absolute",
            bottom: RFPercentage(2),
          }}
        >
          <SocialLinksButtons
            iconName="facebook-f"
            title="Sign in with Facebook"
            width="75%"
            height={RFPercentage(7)}
            backgroundColor={null}
            borderColor={Colors.white}
            borderWidth={RFPercentage(0.2)}
            titleColor={Colors.white}
            iconColor={Colors.white}
            iconSize={RFPercentage(3)}
          />
        </View>
      </ImageBackground>
    </>
  );
}

export default SignInScreen;
