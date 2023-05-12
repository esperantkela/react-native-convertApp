import { Text } from "react-native";
import { styles } from "./TemperatureDisplay.style";

export function TemperatureDisplay({ value, unit }) {
  return (
    <Text style={styles.text}>
      {value} {unit}
    </Text>
  );
}
