import { useState } from "react";
import { KeyboardAvoidingView, Text, TextInput, Button, StyleSheet } from "react-native";
import { doSignInWithEmailAndPassword } from "../components/authentication";

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeEmail}
        value={email}
        autoCapitalize="none"
        autoCorrect={false} // Disable autocorrect for email input
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true} // Hide password characters
      />

      <Button title="Login" onPress={async () => {
        await doSignInWithEmailAndPassword(email, password);
        navigation.navigate("Initial");
      }} style={styles.button} />
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
    marginTop: 20,
    backgroundColor: "#4CAF50", // Green color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export { LoginScreen };
