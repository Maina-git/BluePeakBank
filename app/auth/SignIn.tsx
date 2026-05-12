import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onLogin: () => void;
}

export default function SignIn({ onLogin }: Props) {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <View style={styles.container}>
      
      
      <View style={styles.header}>
        <Ionicons name="business" size={42} color="#0A1F44" />
        <Text style={styles.bankName}>BluePeak Bank</Text>
        <Text style={styles.tagline}>
          Secure banking for your future
        </Text>
      </View>

      {/* Auth Card */}
      <View style={styles.card}>

        {/* Toggle */}
        <View style={styles.toggle}>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              isSignIn && styles.activeBtn,
            ]}
            onPress={() => setIsSignIn(true)}
          >
            <Text
              style={[
                styles.toggleText,
                isSignIn && styles.activeText,
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleBtn,
              !isSignIn && styles.activeBtn,
            ]}
            onPress={() => setIsSignIn(false)}
          >
            <Text
              style={[
                styles.toggleText,
                !isSignIn && styles.activeText,
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Inputs */}
        {!isSignIn && (
          <TextInput
            placeholder="Full Name"
            style={styles.input}
          />
        )}

        <TextInput
          placeholder="Email Address"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={onLogin}
        >
          <Text style={styles.buttonText}>
            {isSignIn ? "Login" : "Create Account"}
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1F44", // dark blue background
    justifyContent: "center",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 25,
  },

  bankName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },

  tagline: {
    color: "#CBD5E1",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#F8FAFC", // whitish background
    borderRadius: 25,
    padding: 25,
  },

  toggle: {
    flexDirection: "row",
    backgroundColor: "#E2E8F0",
    borderRadius: 12,
    marginBottom: 20,
  },

  toggleBtn: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },

  activeBtn: {
    backgroundColor: "#0A1F44",
    borderRadius: 12,
  },

  toggleText: {
    color: "#475569",
    fontWeight: "600",
  },

  activeText: {
    color: "#fff",
  },

  input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor: "#0A1F44",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});