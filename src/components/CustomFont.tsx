import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const CustomFont = () => {
  const fontLoaded = useFonts({
    Test: require("../../assets/fonts/SF-Pro-Display-Ultralight.otf"),
  });

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30, fontFamily: "Test" }}>Hello</Text>
      </View>
    </>
  );
};

export default CustomFont;

const styles = StyleSheet.create({});
