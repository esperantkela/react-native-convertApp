import { styles } from "./app.style";
import { ImageBackground, View } from "react-native";
import hotBg from "./assets/hot.png";
export default function App() {
  return (
    <ImageBackground source={hotBg} style={styles.container}>
      <View style={styles.workspace}>
        <View>
          <Text>Température</Text>
        </View>
        <View>
          <Text>Input</Text>
        </View>
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
