import { Tabs } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, View } from "react-native";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import WorkoutBottomSheet from "../../components/WorkoutBottomSheet";
import WorkoutBottomSheetButton from "../../components/WorkoutBottomSheetButton";
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

const TabsLayout = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["95%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

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

      <WorkoutBottomSheetButton handlePresentModal={handlePresentModal} />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: "#00031b",
        }}
        handleIndicatorStyle={{
          backgroundColor: "#ffc68a",
          width: "25%",
        }}
      >
        <WorkoutBottomSheet />
      </BottomSheetModal>
    </>
  );
};

export default TabsLayout;
