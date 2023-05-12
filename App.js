import { styles } from "./app.style";
import { ImageBackground, View, Text } from "react-native";
import hotBg from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature";
export default function App() {
  return (
    <ImageBackground source={hotBg} style={styles.container}>
      <View style={styles.workspace}>
        <View>
          <Text>Température</Text>
        </View>
        <InputTemperature defaulValue={"12"} />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
