import { Text, Button, TextInput, KeyboardAvoidingView, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { doOrder } from "../components/handleOrder";

const OrderScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <KeyboardAvoidingView  behavior="padding" style={styles.container}>
        <ScrollView>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setName}
        value={name}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Destination:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setDestination}
        value={destination}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Cost:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setPrice}
        value={price}
        autoCapitalize="none"
        keyboardType="numeric" // Set keyboard type for numbers
      />

      <Button
        title="Place Order"
        onPress={async () => {
          await doOrder(name, destination, price);
          navigation.navigate("Initial");
        }}
        style={styles.button}
      />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#4CAF50", // Green color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export { OrderScreen };
