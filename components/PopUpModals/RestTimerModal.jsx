import PrimaryButton from "components/Buttons/PrimaryButton";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const items = [];
for (let i = 5; i <= 300; i += 5) {
  items.push(
    Math.floor(i / 60).toFixed(0) + ":" + (i % 60).toString().padStart(2, "0")
  );
}
items.unshift("", "Off");
items.push("");

const WheelPicker = ({ items, value, onIndexChange, itemHeight }) => {
  const ref = useRef(null);
  const momentumScrollEnd = (event) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / itemHeight);
    onIndexChange(index);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollToIndex({ index: value, animated: true });
    }
  }, [value]);

  return (
    <View style={{ height: itemHeight * 3 }}>
      <FlatList
        ref={ref}
        data={items}
        snapToInterval={itemHeight}
        renderItem={({ item }) => (
          <Text style={[styles.pickerItem, { height: itemHeight }]}>
            {item}
          </Text>
        )}
        onMomentumScrollEnd={momentumScrollEnd}
        showsVerticalScrollIndicator={false}
      />

      <View style={[styles.indicatorHolder, { top: itemHeight }]}>
        <View style={[styles.indicator]} />
        <View style={[styles.indicator, { marginTop: itemHeight }]} />
      </View>
    </View>
  );
};

const RestTimerModal = () => {
  const [value, setValue] = useState(0);

  return (
    <View className="rounded-md bg-[#141414] p-4">
      <Text className="text-center text-xl font-bold text-white">
        Rest Timer
      </Text>

      <View className="mt-4 flex-row justify-around">
        <PrimaryButton
          title="Off"
          containerStyles={"px-4"}
          textStyles={"text-sm"}
          handlePress={() => setValue(0)}
        />
        <PrimaryButton
          title="1:00"
          containerStyles={"px-4"}
          textStyles={"text-sm"}
          handlePress={() => setValue(60)}
        />
        <PrimaryButton
          title="2:00"
          containerStyles={"px-4"}
          textStyles={"text-sm"}
          handlePress={() => setValue(120)}
        />
        <PrimaryButton
          title="3:00"
          containerStyles={"px-4"}
          textStyles={"text-sm"}
          handlePress={() => setValue(180)}
        />
        <PrimaryButton
          title="5:00"
          containerStyles={"px-4"}
          textStyles={"text-sm"}
          handlePress={() => setValue(300)}
        />
      </View>

      <WheelPicker
        items={items}
        onIndexChange={(item) => {
          setValue(item * 5);
        }}
        value={value / 5}
        itemHeight={40}
      />

      <PrimaryButton title="Done" containerStyles={"px-4"} />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerItem: {
    fontWeight: "600",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
  },
  indicatorHolder: {
    position: "absolute",
    alignSelf: "center",
  },

  indicator: {
    width: 120,
    height: 1,
    backgroundColor: "#ccc",
  },
});

export default RestTimerModal;