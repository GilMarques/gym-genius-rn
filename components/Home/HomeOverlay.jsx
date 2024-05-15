import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import PrimaryButton from "../Buttons/PrimaryButton";

const OverlayButton = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity>
      <View className="flex-row items-center justify-end" style={{ gap: 10 }}>
        <Text className="text-white">{title}</Text>
        <View className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
          {icon}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeOverlay = ({ overlayVisible, setOverlayVisible }) => {
  return (
    <View
      className={`absolute h-full w-full ${overlayVisible ? "flex" : "hidden"}`}
    >
      <TouchableWithoutFeedback onPress={() => setOverlayVisible(false)}>
        <View className="h-full bg-black opacity-40"></View>
      </TouchableWithoutFeedback>

      <View
        className="absolute h-[83%] w-full items-end justify-end pr-5"
        style={{ gap: 15 }}
      >
        <OverlayButton
          title={"Settings"}
          icon={<Ionicons name="settings-sharp" size={16} color="black" />}
        />
        <OverlayButton
          title={"Edit Programs"}
          icon={<FontAwesome6 name="newspaper" size={16} color="black" />}
        />
        <OverlayButton
          title={"Edit Featured"}
          icon={<FontAwesome6 name="star" size={16} color="black" />}
        />
      </View>
      <View className="absolute bottom-[70px] right-5">
        <PrimaryButton
          title={<Ionicons name="close" size={24} color="black" />}
          containerStyles={"rounded-full w-12 h-12"}
        />
      </View>
    </View>
  );
};

export default HomeOverlay;
