import { Text, TouchableOpacity } from "react-native/types";
import { styles } from "./ButtonConvert.style";

export function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}
