import {
  // Import the creation function
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CustomKeyPad from "components/CustomKeyPad";
import { KeypadProvider } from "context/KeypadProvider";
import { LoginProvider } from "context/LoginProvider";
import { TimerProvider } from "context/TimerProvider";
import { WorkoutProvider } from "context/WorkoutProvider";
import { withLayoutContext } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  optionsAddList,
  optionsAuth,
  optionsCurrent,
  optionsHomeMenu,
  optionsIndex,
  optionsList,
  optionsNew,
  optionsReorder,
  optionsSearch,
  optionsTabs,
} from "options";
import { PaperProvider } from "react-native-paper";

const { Navigator } = createStackNavigator();

export const JsStack = withLayoutContext(Navigator);

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <View style={{ height: "100%", width: "100%" }}>
        <PaperProvider>
          <LoginProvider>
            <WorkoutProvider>
              <KeypadProvider>
                <TimerProvider>
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
                    <JsStack.Screen
                      name="(modals)/search/[exerciseId]"
                      options={optionsSearch}
                    />
                    <JsStack.Screen
                      name="(modals)/addExercisesList"
                      options={optionsAddList}
                    />

                    <JsStack.Screen
                      name="(modals)/reorderExercises"
                      options={optionsReorder}
                    />
                  </JsStack>

                  <CustomKeyPad />
                  <StatusBar style="light" />
                </TimerProvider>
              </KeypadProvider>
            </WorkoutProvider>
          </LoginProvider>
        </PaperProvider>
      </View>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
