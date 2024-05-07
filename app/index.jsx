import * as NavigationBar from "expo-navigation-bar";
import { Redirect, router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";

import { useGlobalContext } from "../context/GlobalProvider";

NavigationBar.setBackgroundColorAsync("#00031b");
export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  return <Redirect href={"/train"} />;
  if (!isLoading && isLoggedIn) return <Redirect href={"/home"} />;
  return (
    <>
      <SafeAreaView className="h-full bg-primary">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="min-h-[85vh] w-full items-center justify-center px-4">
            <Text className="text-center text-3xl font-bold text-white">
              Conquer Your{" "}
            </Text>
            <Text className="text-3xl font-bold text-red-500">Goals</Text>
            <Image
              source={images.climb}
              className="h-[400px] w-full"
              resizeMode="contain"
            />

            <Text className="text-center text-3xl font-bold text-white">
              Track Your Workouts{" "}
            </Text>

            <CustomButton
              title={"Get Started"}
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-[70%] mt-7"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
