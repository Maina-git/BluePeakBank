import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Payments() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payments Analytics</Text>

      <PieChart
        data={[
          {
            name: "Food",
            population: 30,
            color: "#0A1F44",
            legendFontColor: "#64748B",
            legendFontSize: 12,
          },
          {
            name: "Transport",
            population: 20,
            color: "#1E3A8A",
            legendFontColor: "#64748B",
            legendFontSize: 12,
          },
          {
            name: "Bills",
            population: 50,
            color: "#3B82F6",
            legendFontColor: "#64748B",
            legendFontSize: 12,
          },
        ]}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          color: () => "#0A1F44",
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />

      <View style={styles.card}>
        <Text>Quick Pay Options</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC", padding: 20 },
  header: { fontSize: 26, fontWeight: "bold", color: "#0A1F44", marginTop: 50 },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 15, marginTop: 20 },
});


