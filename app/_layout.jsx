import {
  // Import the creation function
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CustomKeyPad from "components/CustomKeyPad";
import { KeypadProvider } from "context/KeypadProvider";
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
  optionsSuperset,
  optionsSwap,
  optionsTabs,
} from "options";
import { PaperProvider } from "react-native-paper";
import { startTimer, useStore } from "stores/timerStore";

const { Navigator } = createStackNavigator();

export const JsStack = withLayoutContext(Navigator);

const RootLayout = () => {
  const increaseCount = useStore((state) => state.increase);
  const setRef = useStore((state) => state.setRef);
  useEffect(() => {
    const ref = startTimer(increaseCount, setRef);
    return () => clearInterval(ref);
  }, []);
  return (
    <GestureHandlerRootView>
      <View style={{ height: "100%", width: "100%" }}>
        <PaperProvider>
          <KeypadProvider>
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

              <JsStack.Screen
                name="(modals)/swapExercise"
                options={optionsSwap}
              />

              <JsStack.Screen
                name="(modals)/addToSuperset"
                options={optionsSuperset}
              />
            </JsStack>

            <CustomKeyPad />
            <StatusBar style="light" />
          </KeypadProvider>
        </PaperProvider>
      </View>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
