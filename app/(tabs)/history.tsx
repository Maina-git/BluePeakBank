import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction History</Text>

      <LineChart
        data={{
          labels: ["M", "T", "W", "T", "F"],
          datasets: [{ data: [2000, 5000, 3000, 7000, 4000] }],
        }}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          color: () => "#0A1F44",
          labelColor: () => "#64748B",
        }}
        bezier
      />

      <View style={styles.card}>
        <Text>Latest: Salary + KES 50,000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC", padding: 20 },
  header: { fontSize: 26, fontWeight: "bold", color: "#0A1F44", marginTop: 50 },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 15, marginTop: 20 },
});






