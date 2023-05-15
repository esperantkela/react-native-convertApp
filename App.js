import { styles } from "./app.style";
import { ImageBackground, View, Text } from "react-native";
import hotBg from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { useState } from "react";
import { DEFAULT_TEMEPERATURE } from "./constant";
import { DEFAULT_UNIT } from "./constant";
import {
  getOppositUnit,
  convertTemperatureTo,
} from "./services/temperature-service";
import { ButtonConvert } from "./ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMEPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositUnit = getOppositUnit(currentUnit);

  const getConvertedTemperature = () => {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositUnit, valueAsFloat).toFixed(1);
  };
  const onChangeText = (value) => {};

  return (
    <ImageBackground source={hotBg} style={styles.container}>
      <View style={styles.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature}
          unit={oppositUnit}
        />
        <InputTemperature
          onChangeText={setInputValue}
          unit={currentUnit}
          defaulValue={DEFAULT_TEMEPERATURE}
        />
        <View>
          <ButtonConvert
            onPress={() => setCurrentUnit(oppositUnit)}
            unit={currentUnit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
