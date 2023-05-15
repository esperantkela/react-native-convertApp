import { useState, useEffect } from "react";
import { styles } from "./app.style";
import { ImageBackground, View, Text } from "react-native";
import hotBg from "./assets/hot.png";
import coldBg from "./assets/cold.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMEPERATURE, DEFAULT_UNIT } from "./constant";
import {
  getOppositUnit,
  convertTemperatureTo,
  isIceTemperature,
} from "./services/temperature-service";
import { ButtonConvert } from "./ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMEPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();
  const oppositUnit = getOppositUnit(currentUnit);

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);

      setCurrentBackground(isColdBackground ? coldBg : hotBg);
    }
  }, [inputValue]);
  const getConvertedTemperature = () => {
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositUnit, valueAsFloat).toFixed(1);
  };

  return (
    <ImageBackground source={currentBackground} style={styles.container}>
      <View style={styles.workspace}>
        <TemperatureDisplay
          value={getConvertedTemperature()}
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
