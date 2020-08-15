import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./src/constants/types";

import { AppProvider } from "./src/store";
import Karyawan from "./src/components/Karyawan";
import KaryawanEdit from "./src/components/Karyawan/KaryawanEdit";

const rootStack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppProvider>
        <NavigationContainer>
          <rootStack.Navigator>
            <rootStack.Screen
              name="KaryawanList"
              component={Karyawan}
              options={{ title: "Karyawan" }}
            />
            <rootStack.Screen
              name="KaryawanEdit"
              component={KaryawanEdit}
              options={{ title: "Edit Karyawan" }}
            />
          </rootStack.Navigator>
        </NavigationContainer>
      </AppProvider>
    );
  }
};

export default App;
