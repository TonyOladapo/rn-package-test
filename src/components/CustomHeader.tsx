import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackHeaderProps,
} from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

const CustomHeader = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}
      >
        <Stack.Screen name="Title" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = (props: StackHeaderProps) => {
  console.log(props.scene.route.name);

  return <View></View>;
};

const Home = () => {
  return <View style={{ flex: 1 }}></View>;
};

export default CustomHeader;
