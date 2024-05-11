import { FontAwesome6, Octicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Template = ({ data, index }) => {
  const date = new Date(data.lastPerformed);

  return (
    <SafeAreaView>
      <ScrollView
        className="mb-2 rounded-md bg-[#141414] px-4 py-4"
        style={{ zIndex: index }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-white">{data.title}</Text>

          <View className="flex-row items-center gap-2">
            <Octicons name="share" size={24} color="white" />
            <FontAwesome6 name="ellipsis" size={24} color="white" />
            {/* <Menu onSelect={() => console.log("Delete")}>
              <MenuTrigger>
                <FontAwesome6 name="ellipsis" size={24} color="white" />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption value={1}>
                  <Text>
                    <FontAwesome6 name="trash" size={24} color="black" />
                    Delete
                  </Text>
                </MenuOption>
  
                <MenuOption value={2} text="Edit" />
              </MenuOptions>
            </Menu> */}
          </View>
        </View>

        {data.exercises.map((exercise) => (
          <Text key={exercise.name} className="text-sm text-white">
            {exercise.sets} x {exercise.name}
          </Text>
        ))}

        <View className="flex-row items-center justify-between">
          <Text className="text-blue-500">{data.for}</Text>
          <View className="flex-row items-center gap-1">
            <FontAwesome6 name="clock" size={12} color="white" />
            <Text className="text-white">Est. 56min</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Template;
