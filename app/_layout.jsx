import {
  // Import the creation function
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import GlobalProvider from "../context/GlobalProvider";

import { FontAwesome6 } from "@expo/vector-icons";
import { router, withLayoutContext } from "expo-router";
import { StatusBar } from "expo-status-bar";

const { Navigator } = createStackNavigator();

export const JsStack = withLayoutContext(Navigator);

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <View style={{ height: "100%", width: "100%" }}>
        <MenuProvider>
          <GlobalProvider>
            <JsStack>
              <JsStack.Screen name="index" options={optionsIndex} />
              <JsStack.Screen name="(auth)" options={optionsAuth} />
              <JsStack.Screen name="(tabs)" options={optionsTabs} />

              <JsStack.Screen
                name="(modals)/newTemplate"
                options={optionsNew}
              />

              <JsStack.Screen
                name="(modals)/currentTemplate"
                options={optionsCurrent}
              />

              <JsStack.Screen
                name="(modals)/exerciseList"
                options={optionsList}
              />

              <JsStack.Screen
                name="(modals)/homeMenu"
                options={optionsHomeMenu}
              />
            </JsStack>

            <StatusBar style="light" />
          </GlobalProvider>
        </MenuProvider>
      </View>
    </GestureHandlerRootView>
  );
};

const optionsIndex = {
  headerShown: false,
  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
  headerStyle: {
    backgroundColor: "#1a1a1a",
  },
};
const optionsAuth = {
  headerShown: false,
  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
  headerStyle: {
    backgroundColor: "#1a1a1a",
  },
};
const optionsTabs = {
  headerShown: false,
  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
  headerStyle: {
    backgroundColor: "#1a1a1a",
  },
};
const optionsCurrent = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },

  header: () => (
    <View className="mt-4 flex w-[20%] self-center">
      <View className="rounded-md border-2 border-secondary"></View>
    </View>
  ),
};
const optionsNew = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  headerShown: true,
  title: "New Template",
  headerLeft: () => (
    <TouchableWithoutFeedback onPress={() => router.back()} className="ml-8">
      <FontAwesome6 name="x" size={15} color="white" />
    </TouchableWithoutFeedback>
  ),

  headerRight: () => (
    <TouchableWithoutFeedback onPress={() => router.back()} className="mr-8">
      <Text className="font-bold text-white">SAVE</Text>
    </TouchableWithoutFeedback>
  ),

  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
  headerStyle: {
    backgroundColor: "#1a1a1a",
  },
  headerTitleStyle: {
    color: "#fff",
  },

  headerTitleAlign: "center",
  headerShadowVisible: false,
};
const optionsList = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  headerShown: true,
  title: "Exercises",

  headerLeft: () => (
    <TouchableWithoutFeedback onPress={() => router.back()} className="ml-8">
      <FontAwesome6 name="x" size={15} color="white" />
    </TouchableWithoutFeedback>
  ),

  headerRight: () => (
    <TouchableWithoutFeedback onPress={() => router.back()} className="mr-4">
      <Text className="font-bold text-white">Create New</Text>
    </TouchableWithoutFeedback>
  ),

  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
  headerStyle: {
    backgroundColor: "#1a1a1a",
  },
  headerTitleStyle: {
    color: "#fff",
  },

  headerTitleAlign: "center",
  headerShadowVisible: false,
};

const optionsHomeMenu = {
  ...TransitionPresets.ModalPresentationIOS,

  gestureEnabled: true,
  presentation: "modal",

  headerShown: true,
  title: "Exercises",

  header: () => (
    <View className="mt-4 flex w-[20%] self-center">
      <View className="rounded-md border-2 border-secondary"></View>
    </View>
  ),

  cardStyle: { backgroundColor: "#1a1a1a" },
  overlayStyle: { borderColor: "#1a1a1a" },
  headerStyle: {
    backgroundColor: "#1a1a1a",
  },
  headerTitleStyle: {
    color: "#fff",
  },

  headerTitleAlign: "center",
  headerShadowVisible: false,
};

export default RootLayout;
