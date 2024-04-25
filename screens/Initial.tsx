import { View, Text, Button, StyleSheet } from "react-native";
import { doSignOut } from "../components/authentication";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/firebase";

export function InitialScreen({ navigation }) {
  const [flag, setFlag] = useState(false);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setFlag(true);
    }
  });

  return (
    <View style={styles.container}>
      {(!flag) ? (
        <>
          <Text style={styles.title}>Home Screen</Text>
          <Button title="Login" onPress={() => navigation.navigate("Login")} style={styles.button} />
          <Button title="Signup" onPress={() => navigation.navigate("Signup")} style={styles.button} />
        </>
      ) : (
        <>
          <Text style={styles.welcomeText}>Welcome {`${user.email}`}!</Text>
          <Button title="Place Order" onPress={() => navigation.navigate("Order")} style={styles.button} />
          <Button title="View Order" onPress={() => navigation.navigate("ViewOrder")} style={styles.button} />
          <Button title="Logout" onPress={async () => {
            await doSignOut();
            setFlag(false);
            setUser(null);
          }} style={styles.button} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20, // Add horizontal padding for better spacing
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    marginTop: 10, // Add margin between buttons
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
  },
});
