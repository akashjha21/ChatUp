import { StyleSheet, Text, StatusBar, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const index = () => {
  return (
    <SafeAreaView style={{ justifyContent: "space-between", flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <LottieView
          style={{ width: 200, height: 200 }}
          autoPlay
          loop
          source={require("../assets/Lotties/LoginLottie.json")}
        />
        <Text>Welcome to ChatUp</Text>
        <Text>Read our Privacy Policy. Tap "Agree and continue" to</Text>
        <Text>accept the Terms of Service</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Ionicons name="airplane" size={20} />
          <Text>English</Text>
        </View>
      </View>
      <View></View>
      <StatusBar
        backgroundColor="black"
        barStyle={"dark-content"}
        translucent={false}
        hidden
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
