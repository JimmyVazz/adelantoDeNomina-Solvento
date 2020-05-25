import React, { useState } from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Untitled from "./src/components/Untitled";

const DrawerNavigation = DrawerNavigator({
  Untitled: {
    screen: Untitled
  }
});

const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Untitled: {
      screen: Untitled
    }
  },
  {
    headerMode: "none"
  }
);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <StackNavigation /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "amiko-regular": require("./src/assets/fonts/amiko-regular.ttf"),
      "georgia-regular": require("./src/assets/fonts/georgia-regular.ttf"),
      "arial-regular": require("./src/assets/fonts/arial-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
