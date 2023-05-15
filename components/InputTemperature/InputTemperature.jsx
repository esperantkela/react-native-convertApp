import { Text, TextInput, View } from "react-native";
import { styles } from "./InputTemperature.style";

export function InputTemperature({ defaulValue, onChangeText, unit }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tape une température"
        style={styles.input}
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaulValue}
        onChangeText={onChangeText}
      />

      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
}
