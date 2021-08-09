import React, { useState, useEffect } from "react";
import { View, Animated, ViewStyle, Text, Easing as Ease } from "react-native";
import { SquircleView } from "react-native-figma-squircle";
import RNTAnimatedPressable from "./AnimatedPressable";

const AnimatedView = Animated.createAnimatedComponent(View);

const WelcomeScreen = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [buttonScale] = useState(new Animated.Value(0));

  const buttonAnimatedStyle: ViewStyle = {
    transform: [
      {
        //@ts-ignore
        scale: buttonScale,
      },
    ],
  };

  const rotationInterpolator = animation.interpolate({
    inputRange: [0, 20],
    outputRange: ["0deg", "-10deg"],
  });

  const animatedParentStyles: ViewStyle = {
    transform: [
      {
        //@ts-ignore
        rotate: rotationInterpolator,
      },
    ],
  };

  const startRotation = () => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: 20,
        duration: 500,
        useNativeDriver: true,
        easing: Ease.elastic(2),
      }),
    ]).start(() => {
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }).start();
    });
  };

  useEffect(() => {
    startRotation();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 4,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <AnimatedView style={[animatedParentStyles, { alignSelf: "flex-end" }]}>
          <SquircleView
            style={{
              height: 150,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
            squircleParams={{
              cornerSmoothing: 1,
              cornerRadius: 30,
              fillColor: "#846eb7",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 40,
                color: "#F5F2F1",
                width: 255,
                textAlign: "right",
              }}
            >
              <Text>mSer</Text>
              <Text style={{ color: "#846eb7" }}>ies</Text>
            </Text>
          </SquircleView>
        </AnimatedView>
      </View>

      <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
        <RNTAnimatedPressable
          style={[
            buttonAnimatedStyle,
            { backgroundColor: "#846eb7", padding: 16, borderRadius: 7 },
          ]}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Get started
          </Text>
        </RNTAnimatedPressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;
