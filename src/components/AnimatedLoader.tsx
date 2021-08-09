import React, { useState, useEffect } from "react";
import { StyleSheet, Animated, View, Text, TextStyle } from "react-native";

const AnimatedText = Animated.createAnimatedComponent(Text);

const Loader = () => {
  const [mSize] = useState(new Animated.Value(0));
  const [sSize] = useState(new Animated.Value(0));
  const [eSize] = useState(new Animated.Value(0));
  const [rSize] = useState(new Animated.Value(0));
  const [iSize] = useState(new Animated.Value(0));
  const [seSize] = useState(new Animated.Value(0));
  const [ssSize] = useState(new Animated.Value(0));

  const mInterpolator = mSize.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 1.3, 1.4],
  });

  const sInterpolator = sSize.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 1.3, 1.4],
  });

  const eInterpolator = eSize.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 1.3, 1.4],
  });

  const rInterpolator = rSize.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 1.3, 1.4],
  });

  const iInterpolator = iSize.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 1.3, 1.4],
  });

  const seInterpolator = seSize.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 1.3, 1.4],
  });

  const ssInterpolator = ssSize.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 1.3, 1.4],
  });

  const mStyle: TextStyle = {
    paddingHorizontal: 4,
    transform: [
      {
        //@ts-ignore
        scale: mInterpolator,
      },
    ],
  };

  const sStyle: TextStyle = {
    paddingHorizontal: 4,
    transform: [
      {
        //@ts-ignore
        scale: sInterpolator,
      },
    ],
  };

  const eStyle: TextStyle = {
    paddingHorizontal: 4,
    transform: [
      {
        //@ts-ignore
        scale: eInterpolator,
      },
    ],
  };

  const rStyle: TextStyle = {
    paddingHorizontal: 4,
    transform: [
      {
        //@ts-ignore
        scale: rInterpolator,
      },
    ],
  };

  const iStyle: TextStyle = {
    paddingHorizontal: 4,
    transform: [
      {
        //@ts-ignore
        scale: iInterpolator,
      },
    ],
  };

  const seStyle: TextStyle = {
    paddingHorizontal: 4,
    transform: [
      {
        //@ts-ignore
        scale: seInterpolator,
      },
    ],
  };

  const ssStyle: TextStyle = {
    paddingHorizontal: 4,
    transform: [
      {
        //@ts-ignore
        scale: ssInterpolator,
      },
    ],
  };

  const startAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(mSize, {
          toValue: 2,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(ssSize, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(sSize, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(sSize, {
          toValue: 2,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(mSize, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(eSize, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(eSize, {
          toValue: 2,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(sSize, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(rSize, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(rSize, {
          toValue: 2,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(eSize, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(iSize, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(iSize, {
          toValue: 2,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(rSize, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(seSize, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(seSize, {
          toValue: 2,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(iSize, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(ssSize, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(ssSize, {
          toValue: 2,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(seSize, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),

        Animated.timing(mSize, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      startAnimation();
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <AnimatedText style={[mStyle, { fontSize: 30 }]}>m</AnimatedText>
        <AnimatedText style={[sStyle, { fontSize: 30 }]}>s</AnimatedText>
        <AnimatedText style={[eStyle, { fontSize: 30 }]}>e</AnimatedText>
        <AnimatedText style={[rStyle, { fontSize: 30 }]}>r</AnimatedText>
        <AnimatedText style={[iStyle, { fontSize: 30 }]}>i</AnimatedText>
        <AnimatedText style={[seStyle, { fontSize: 30 }]}>e</AnimatedText>
        <AnimatedText style={[ssStyle, { fontSize: 30 }]}>s</AnimatedText>
      </View>
    </View>
  );
};

export default Loader;
