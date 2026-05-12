import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../themes/theme";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        My Profile
      </Text>

      <View style={styles.card}>
        <Text>Name: Francis</Text>
      </View>

      <View style={styles.card}>
        <Text>Email: example@email.com</Text>
      </View>

      <View style={styles.card}>
        <Text>Security Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  header: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
});