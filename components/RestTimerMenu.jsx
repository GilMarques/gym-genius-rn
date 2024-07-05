import { secondsToms } from "lib/helper";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { stopRestTimer, useRestTimerStore } from "stores/restTimerStore";
import PrimaryButton from "./Buttons/PrimaryButton";
import RestTimerProgressBar from "./RestTimerProgressBar";

const RestTimerMenu = () => {
  const increaseDuration = useRestTimerStore((state) => state.increaseDuration);
  const decreaseDuration = useRestTimerStore((state) => state.decreaseDuration);

  const current = useRestTimerStore((state) => state.current);
  const intervalRef = useRestTimerStore((state) => state.intervalRef);
  const setRef = useRestTimerStore((state) => state.setRef);
  return (
    <>
      {intervalRef && current !== 0 && (
        <View
          className="absolute w-[90%] self-center rounded-xl border border-neutral-800 bg-background-dark p-4"
          style={{ elevation: 2, zIndex: 100 }}
        >
          <View
            className="flex-row items-center justify-between"
            style={{ gap: 20 }}
          >
            <View className="mt-2" style={{ flexGrow: 1 }}>
              <View className="flex-row items-center justify-around">
                <TouchableOpacity onPress={decreaseDuration}>
                  <View>
                    <Text className="text-primary">-15</Text>
                  </View>
                </TouchableOpacity>

                <Text className="text-xl text-white">
                  {secondsToms(current)}
                </Text>

                <TouchableOpacity onPress={increaseDuration}>
                  <View>
                    <Text className="text-primary">+15</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="h-4 rounded-md border border-primary-light">
                <RestTimerProgressBar />
              </View>
            </View>

            <PrimaryButton
              title="Skip"
              containerStyles={"px-4"}
              handlePress={() => stopRestTimer(intervalRef, setRef)}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default RestTimerMenu;
