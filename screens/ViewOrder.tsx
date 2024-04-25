import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { getOrder } from "../components/handleOrder";
import { auth } from "../components/firebase";

interface Order {
    id: string;
    name: string;
    cost: number;
    destination: string;
  }

const ViewOrderScreen = () => {
  const [data, setData] = useState<Order[]>([]);

  const getData = () => {
    getOrder(auth.currentUser.uid).then((elem) => {
      setData([...elem]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Orders:</Text>
      {data.map((elem) => (
        <View key={elem.id} style={styles.orderItem}>
          <Text style={styles.orderDetails}>{elem.name}</Text>
          <Text style={styles.orderDetails}>{elem.cost}</Text>
          <Text style={styles.orderDetails}>{elem.destination}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
},
orderDetails: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export { ViewOrderScreen };
