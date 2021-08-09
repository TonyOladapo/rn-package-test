import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from "react";
import { View, Animated } from "react-native";

const ProgressBar = Animated.createAnimatedComponent(View);

export type AnimHandle = {
  setProgress: (value: 0 | 1 | 2 | 3) => void;
};

const AnimatedProgressBar: ForwardRefRenderFunction<AnimHandle> = (_, ref) => {
  const [animatedWidth] = useState(new Animated.Value(0));
  const [animatedColor] = useState(new Animated.Value(0));

  const interpolator = animatedWidth.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ["0%", "35%", "70%", "100%"],
  });

  const colorInterpolator = animatedWidth.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ["#000", "#F0535D", "#64d699", "#000"],
  });

  useImperativeHandle(ref, () => ({
    setProgress: (value: 0 | 1 | 2 | 3) => {
      Animated.parallel([
        Animated.timing(animatedWidth, {
          toValue: value,
          duration: 500,
          useNativeDriver: false,
        }),

        Animated.timing(animatedColor, {
          toValue: value,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    },
  }));

  return (
    <ProgressBar
      style={{
        height: 10,
        backgroundColor: colorInterpolator,
        width: interpolator,
      }}
    />
  );
};

export default forwardRef(AnimatedProgressBar);
