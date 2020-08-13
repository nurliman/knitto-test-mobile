import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AppProvider } from "./src/store";
import Karyawan from "./src/components/Karyawan";

const Stack = createStackNavigator();

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    'Quicksand-Bold': require("./assets/fonts/Quicksand-Bold.ttf"),
    'Quicksand-Light': require("./assets/fonts/Quicksand-Light.ttf"),
    'Quicksand-Medium': require("./assets/fonts/Quicksand-Medium.ttf"),
    'Quicksand-Regular': require("./assets/fonts/Quicksand-Regular.ttf"),
    'Quicksand-SemiBold': require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Karyawan" component={Karyawan} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    );
  }
};

export default App;
