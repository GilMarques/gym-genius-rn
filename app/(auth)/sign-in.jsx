import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "components/Buttons/PrimaryButton";
import FormField from "components/FormField";
import { images } from "constants";
import { useGlobalContext } from "context/GlobalProvider";
import { Link, router } from "expo-router";
import { getCurrentUser, signIn } from "lib/appwrite";
const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email == "" || form.password == "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setIsSubmiting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);
      router.replace("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmiting(false);
    }
  };
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="my-6 h-full w-full justify-center px-4">
          <Image
            source={images.brain}
            className="h-[200px] w-full"
            resizeMode="contain"
          />
          <Text className="text-center text-3xl font-bold text-white">
            Log in to GymGenius
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <PrimaryButton
            title={"Log in"}
            handlePress={submit}
            containerStyles={" mt-7"}
            isLoading={isSubmiting}
          />
          <View className="flex-row items-center justify-center gap-2">
            <Text className="text-xl text-white">Don't have an account?</Text>
            <Link
              href={"/sign-up"}
              className="text-xl font-bold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
