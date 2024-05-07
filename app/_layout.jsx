import { FontAwesome6 } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import GlobalProvider from "../context/GlobalProvider";
const RootLayout = () => {
  return (
    <MenuProvider>
      <GlobalProvider>
        <Stack screenOptions={{ contentStyle: { backgroundColor: "#00031b" } }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(workout)/newTemplate"
            options={{
              presentation: "modal",
              headerShown: true,
              title: "New Template",
              headerLeft: () => (
                <TouchableWithoutFeedback onPress={() => router.back()}>
                  <FontAwesome6 name="x" size={24} color="white" />
                </TouchableWithoutFeedback>
              ),

              headerRight: () => (
                <TouchableWithoutFeedback onPress={() => router.back()}>
                  <Text className="font-bold text-white">SAVE</Text>
                </TouchableWithoutFeedback>
              ),
              headerStyle: {
                backgroundColor: "#00031b",
                borderBottomColor: "yellow",
                borderBottomWidth: 5,
              },
              headerTitleStyle: {
                color: "#fff",
              },
              headerTitleAlign: "center",
              headerShadowVisible: true,
              animation: "slide_from_bottom",
            }}
          />
          {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
        </Stack>
      </GlobalProvider>
    </MenuProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
