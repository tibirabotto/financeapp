import 'react-native-reanimated'
import React from "react";
import { NativeBaseProvider} from "native-base";
import { Home } from "./src/pages/Home/Index";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home/>
    </NativeBaseProvider>
  );
}
