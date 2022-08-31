import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import useFonts from "./src/components/useFonts";
import { Provider } from "react-redux";

import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/redux/store";
// const loadFonts = async () => {
//   return await Font.loadAsync({
//     "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
//     "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
//   });
// };
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
