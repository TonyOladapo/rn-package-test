import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Pressable from "./src/components/AnimatedPressable";

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable scaleValue={1.5}>
        <View
          style={{
            padding: 32,
            backgroundColor: "tomato",
            borderRadius: 10,
            height: 200,
            width: 200,
          }}
        ></View>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
