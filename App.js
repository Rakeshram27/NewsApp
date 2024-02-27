import React from "react";
import { View } from "react-native";
import Homescreen from "./screens/Homescreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {
  return(
    <SafeAreaProvider>
    <View>
      {/* <Text style={{fontSize: 20}}> NewsApp </Text> */}
      <Homescreen/>
    </View>
    </SafeAreaProvider>
  )
}
export default App;
