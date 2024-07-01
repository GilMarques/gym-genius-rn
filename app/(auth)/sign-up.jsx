import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "components/Buttons/PrimaryButton";
import FormField from "components/FormField";
import { images } from "constants";
import { useLoginContext } from "context/LoginProvider";
import { Link, router } from "expo-router";
import { createUser } from "lib/appwrite";

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useLoginContext();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const submit = async () => {
    if (form.username == "" || form.email == "" || form.password == "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setIsSubmiting(true);

    try {
      const result = await createUser(form.username, form.email, form.password);
      setUser(result);
      setIsLoggedIn(true);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmiting(false);
    }
  };
  return (
    <SafeAreaView className="h-full bg-background">
      <ScrollView>
        <View className="my-6 h-full w-full justify-center px-4">
          <Image
            source={images.brain}
            className="h-[200px] w-full"
            resizeMode="contain"
          />
          <Text className="text-center text-3xl font-bold text-white">
            Sign up to GymGenius
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
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
            title={"Sign Up"}
            handlePress={submit}
            containerStyles={" mt-7"}
            isLoading={isSubmiting}
          />
          <View className="flex-row items-center justify-center gap-2">
            <Text className="text-xl text-white">Have an account?</Text>
            <Link href={"/sign-in"} className="text-xl font-bold text-primary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
