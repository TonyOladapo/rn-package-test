import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import PagerView from "react-native-pager-view";
import Constants from "expo-constants";
import { genres } from "../constants/Genres";
import { SquircleView } from "react-native-figma-squircle";

const OnBoardingPager = () => {
  const pagerRef = useRef();

  return (
    <PagerView
      //@ts-ignore
      ref={pagerRef}
      style={styles.container}
    >
      <View key="1" style={styles.page}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              <Text style={{ color: "#fff" }}>mSe</Text>
              <Text style={{ color: "#64d699" }}>ries</Text>
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 30 }}>
              Welcome.
            </Text>

            <Text style={{ color: "#96A7AF" }}>
              Track and manage your favorite TV shows
            </Text>
          </View>
          <View
            style={{ flex: 4, alignItems: "center", justifyContent: "center" }}
          ></View>
          <View style={{ flex: 2 }}>
            <NextButton
              onPress={() =>
                //@ts-ignore
                pagerRef.current?.setPage(1)
              }
            />
          </View>
        </View>
      </View>
      <View key="2" style={styles.page}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 7 }}>
          <FlatList
            data={genres}
            numColumns={2}
            keyExtractor={({ slug }, index) => `${index}-${slug}`}
            renderItem={({ item }) => (
              <SquircleView
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 20,
                  paddingVertical: 40,
                  margin: 6,
                }}
                squircleParams={{
                  cornerSmoothing: 0.7,
                  cornerRadius: 20,
                  fillColor: "#30444e",
                }}
              >
                <Text style={{ color: "#fff" }}>{item.name}</Text>
              </SquircleView>
            )}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: "25%",
              backgroundColor: "#286053",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 24,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#64d699" }}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "70%",
              backgroundColor: "#64d699",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 24,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View key="3" style={styles.page}></View>
    </PagerView>
  );
};

const NextButton = ({ onPress }: { onPress: any }) => {
  return (
    <TouchableOpacity style={styles.next_button} onPress={onPress}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Next
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2F36",
    marginTop: Constants.statusBarHeight,
  },

  page: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },

  next_button: {
    paddingVertical: 24,
    backgroundColor: "#64D699",
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
  },
});

export default OnBoardingPager;
