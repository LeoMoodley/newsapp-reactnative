import * as Font from "expo-font";

const useFonts = async () =>
  await Font.loadAsync({
    "Ubuntu-Regular": require("../../assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold": require("../../assets/fonts/Ubuntu-Bold.ttf"),
  });

export default useFonts;
