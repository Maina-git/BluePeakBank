import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import { LineChart } from "react-native-chart-kit";
import { COLORS } from "../../themes/theme";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.greeting}>Welcome Back</Text>
      <Text style={styles.bank}>BluePeak Bank</Text>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>
          Available Balance
        </Text>

        <Text style={styles.balance}>
          KES 120,450
        </Text>
      </View>

      {/* Analytics */}
      <Text style={styles.sectionTitle}>
        Spending Analytics
      </Text>

      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          datasets: [
            {
              data: [2000, 4500, 3000, 7000, 5000],
            },
          ],
        }}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#FFFFFF",
          backgroundGradientTo: "#FFFFFF",
          decimalPlaces: 0,

          color: () => COLORS.primary,

          labelColor: () => "#64748B",
        }}
        bezier
        style={styles.chart}
      />

      {/* Transactions */}
      <Text style={styles.sectionTitle}>
        Recent Transactions
      </Text>

      <View style={styles.transaction}>
        <Text>Supermarket</Text>
        <Text>-KES 2,400</Text>
      </View>

      <View style={styles.transaction}>
        <Text>Salary</Text>
        <Text>+KES 50,000</Text>
      </View>

      <View style={styles.transaction}>
        <Text>Electricity</Text>
        <Text>-KES 1,200</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  greeting: {
    marginTop: 50,
    fontSize: 16,
    color: COLORS.lightText,
  },

  bank: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 25,
  },

  balanceCard: {
    backgroundColor: COLORS.primary,
    padding: 25,
    borderRadius: 20,
    marginBottom: 30,
  },

  balanceLabel: {
    color: "#CBD5E1",
  },

  balance: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: COLORS.text,
  },

  chart: {
    borderRadius: 20,
    marginBottom: 30,
  },

  transaction: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,

    flexDirection: "row",
    justifyContent: "space-between",
  },
});