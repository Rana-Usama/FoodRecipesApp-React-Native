import React from "react";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";

//components
import SocialLinksButtons from "../components/common/SocialLinksButton";
import MyAppButton from "./../components/common/MyAppButton";

//images
import backgroundImage from "../assets/welcome.png";

function WelcomeScreen(props) {
  return (
    <>
      {/*BackgroundImage */}
      <ImageBackground
        source={backgroundImage}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {/* SignupButton */}
        <View style={{ width: "100%", marginTop: RFPercentage(44) }}>
          <MyAppButton
            title="SIGNUP"
            backgroundColor={Colors.primary}
            width="75%"
            padding={RFPercentage(1.9)}
            color={Colors.black}
          />
        </View>

        {/* SocialLink */}
        <View style={{ width: "100%", marginTop: RFPercentage(3) }}>
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

        <TouchableOpacity
          style={{ width: "100%", position: "absolute", bottom: 30 }}
          onPress={() => props.navigation.navigate("SignInScreen")}
        >
          <Text
            style={{
              color: Colors.white,
              alignSelf: "center",
            }}
          >
            Already have account? Please Sign in
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
}

export default WelcomeScreen;
