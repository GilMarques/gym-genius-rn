import { router, Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import WorkoutBottomSheetButton from "components/WorkoutBottomSheetButton";
import { useWorkoutContext } from "context/WorkoutProvider";
import tailwindConfig from "tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const components = {
  ionicons: Ionicons,
  fontawesome6: FontAwesome6,
};

const TabIcon = ({ icon_family, icon_name, color, name, focused }) => {
  const Icon_component = components[icon_family] || Ionicons;
  return (
    <View className="items-center justify-center">
      <Icon_component name={icon_name} size={20} color={color} />
      <Text
        className={`${focused ? "font-bold" : "font-normal"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const { currentWorkout } = useWorkoutContext();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: fullConfig.theme.colors.secondary,
          tabBarStyle: {
            backgroundColor: fullConfig.theme.colors.primary,
            paddingTop: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon_family={"ionicons"}
                icon_name={"home-sharp"}
                color={color}
                name={"Home"}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="log"
          options={{
            title: "Log",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon_family={"ionicons"}
                icon_name={"journal-sharp"}
                color={color}
                name={"Log"}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="workouts"
          options={{
            title: "Workouts",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon_family={"fontawesome6"}
                icon_name={"dumbbell"}
                color={color}
                name={"Workouts"}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      {currentWorkout != null && (
        <WorkoutBottomSheetButton
          handlePresentModal={() =>
            router.navigate("/(modals)/currentTemplate")
          }
        />
      )}

      <StatusBar style="light" />
    </>
  );
};

export default TabsLayout;
