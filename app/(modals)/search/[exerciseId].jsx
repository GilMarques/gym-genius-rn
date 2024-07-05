import HistoryCard from "components/ExerciseInfo/HistoryCard";
import SearchHeader from "components/Headers/SearchHeader";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { getTailwindConfig } from "lib/helper";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const fullConfig = getTailwindConfig();

const HistoryRoute = () => {
  return (
    <FlatList
      data={[]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <HistoryCard />}
      ListEmptyComponent={() => (
        <Text className="mt-16 text-center text-white">
          You do not have any history with this exercise yet
        </Text>
      )}
    />
  );
};

const ChartsRoute = () => <View />;

const RecordsRoute = () => <View />;

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: fullConfig.theme.colors.primary.DEFAULT,
    }}
    style={{ backgroundColor: fullConfig.theme.colors.background.DEFAULT }}
  />
);

const videoSource = "https://www.youtube.com/embed/2qCmRJz3NOE";

const Search = () => {
  const { exerciseId } = useLocalSearchParams();

  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: "first", title: "History" },
      { key: "second", title: "Charts" },
      { key: "third", title: "Records" },
    ],
  });

  return (
    <SafeAreaView className="h-full">
      <SearchHeader exerciseId={exerciseId} />
      {/* <View style={{ flex: 1 }}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            uri: videoSource,
          }}
        />
      </View> */}
      <TabView
        renderTabBar={renderTabBar}
        navigationState={state}
        renderScene={SceneMap({
          first: HistoryRoute,
          second: ChartsRoute,
          third: RecordsRoute,
        })}
        onIndexChange={(index) => setState((prev) => ({ ...prev, index }))}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});

export default Search;
