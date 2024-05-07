import { router, Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-7 w-7"
      />
      <Text
        className={`${focused ? "font-bold" : "font-normal"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

function secondsToHourMinuteSecond(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString();
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  if (hours === 0) return `${formattedMinutes}:${formattedSeconds}`;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

const TabsLayout = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [overlayVisible, setOverlayVisible] = useState(false);
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffd554",

          tabBarStyle: {
            backgroundColor: "#00031b",
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
                icon={icons.home}
                color={color}
                name={"Home"}
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
                icon={icons.train}
                color={color}
                name={"Train"}
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
                icon={icons.history}
                color={color}
                name={"History"}
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
                icon={icons.analytics}
                color={color}
                name={"Analytics"}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      <TouchableWithoutFeedback
        onPress={() => {
          router.push("/newTemplate");
        }}
      >
        <View className="absolute bottom-[48px] z-10 w-full rounded-t-xl border border-white bg-primary">
          <View className="flex-row items-center justify-between p-4">
            <Text>
              <FontAwesome6 name="x" size={20} color="white" />{" "}
            </Text>
            <CustomButton title={"Resume"} />
          </View>

          <View className="absolute flex h-full w-full items-center justify-center">
            <Text className="text-center text-xl font-bold text-white">
              Title
            </Text>
            <Text className="text-center text-white">
              {secondsToHourMinuteSecond(seconds)}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default TabsLayout;
