import { Text, TextInput, View } from "react-native";
import { styles } from "./InputTemperature.style";

export function InputTemperature({ defaulValue }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tape une température"
        style={styles.input}
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaulValue}
      />

      <Text style={styles.unit}>°C</Text>
    </View>
  );
}
