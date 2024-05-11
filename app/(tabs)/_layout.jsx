import { router, Tabs } from "expo-router";
import React, { useRef } from "react";
import { Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import WorkoutBottomSheetButton from "../../components/WorkoutBottomSheetButton";

import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

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
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["95%"];

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: fullConfig.theme.colors.secondary,
          headerShadowVisible: true,
          tabBarStyle: {
            backgroundColor: fullConfig.theme.colors.primary,
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
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon_family={"ionicons"}
                icon_name={"journal-sharp"}
                color={color}
                name={"History"}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="train"
          options={{
            title: "Train",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon_family={"fontawesome6"}
                icon_name={"dumbbell"}
                color={color}
                name={"Train"}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="analytics"
          options={{
            title: "Analytics",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon_family={"ionicons"}
                icon_name={"analytics-sharp"}
                color={color}
                name={"Analytics"}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <WorkoutBottomSheetButton
        handlePresentModal={() => router.navigate("/(modals)/exerciseList")}
      />
      <StatusBar style="light" />
    </>
  );
};

export default TabsLayout;
