import PrimaryButton from "components/Buttons/PrimaryButton";
import { images } from "constants";
import * as NavigationBar from "expo-navigation-bar";
import { Redirect, router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import tailwindConfig from "tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

NavigationBar.setBackgroundColorAsync(
  fullConfig.theme.colors.background.DEFAULT
);
export default function App() {
  // const { isLoading, isLoggedIn } = useLoginContext();

  return <Redirect href={`/home`} />;
  if (!isLoading && isLoggedIn) return <Redirect href={"/home"} />;
  return (
    <>
      <SafeAreaView className="h-full bg-background">
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

            <PrimaryButton
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
