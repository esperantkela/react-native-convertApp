import { styles } from "./app.style";
import { ImageBackground, View, Text } from "react-native";
import hotBg from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { useState } from "react";
import { DEFAULT_TEMEPERATURE } from "./constant";
import { DEFAULT_UNIT } from "./constant";
export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMEPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  console.log(inputValue);
  const onChangeText = (value) => {};

  return (
    <ImageBackground source={hotBg} style={styles.container}>
      <View style={styles.workspace}>
        <TemperatureDisplay value={inputValue} unit={currentUnit} />
        <InputTemperature
          onChangeText={setInputValue}
          defaulValue={DEFAULT_TEMEPERATURE}
        />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
