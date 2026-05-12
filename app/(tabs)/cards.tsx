import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;

const size = 180;
const strokeWidth = 12;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

// Example usage: 65% card usage
const usage = 65;
const strokeDashoffset =
  circumference - (circumference * usage) / 100;

export default function Cards() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Card Analytics</Text>

      {/* Card Circle */}
      <View style={styles.circleContainer}>
        <Svg width={size} height={size}>
          {/* Background Circle */}
          <Circle
            stroke="#E2E8F0"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />

          {/* Progress Circle */}
          <Circle
            stroke="#0A1F44"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>

        {/* Center Text */}
        <View style={styles.centerText}>
          <Text style={styles.percent}>{usage}%</Text>
          <Text style={styles.label}>Card Usage</Text>
        </View>
      </View>

      {/* Card Info */}
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Debit Card • **** 4821
        </Text>

        <Text style={styles.subText}>
          Limit: KES 200,000
        </Text>

        <Text style={styles.subText}>
          Available: KES 70,000
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },

  header: {
    marginTop: 50,
    fontSize: 26,
    fontWeight: "bold",
    color: "#0A1F44",
    marginBottom: 30,
  },

  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  centerText: {
    position: "absolute",
    alignItems: "center",
  },

  percent: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0A1F44",
  },

  label: {
    color: "#64748B",
  },

  card: {
    backgroundColor: "#0A1F44",
    padding: 25,
    borderRadius: 20,
  },

  cardText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  subText: {
    color: "#CBD5E1",
    marginTop: 5,
  },
});



