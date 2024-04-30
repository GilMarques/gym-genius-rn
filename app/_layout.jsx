import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import GlobalProvider from "../context/GlobalProvider";
const RootLayout = () => {
  return (
    <GlobalProvider>
      <Stack screenOptions={{ contentStyle: { backgroundColor: "#00031b" } }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
      </Stack>
    </GlobalProvider>
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
