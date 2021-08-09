import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Pressable from "./src/components/AnimatedPressable";
import WelcomeScreen from "./src/components/WelcomeScreen";
import OnBoardingPager from "./src/components/OnBoardingPager";
import AnimatedLoader from "./src/components/AnimatedLoader";
import CustomFont from "./src/components/CustomFont";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import CustomHeader from "./src/components/CustomHeader";
import AnimatedProgressBar, {
  AnimHandle,
} from "./src/components/AnimatedProgressBar";

export default function App() {
  const ref = useRef<AnimHandle>(null);
  useEffect(() => {
    ref.current?.setProgress(3);
  }, []);
  return (
    <>
      <StatusBar />
      <View style={{ justifyContent: "center", flex: 1 }}>
        <AnimatedProgressBar ref={ref} />
      </View>
    </>
  );
}
