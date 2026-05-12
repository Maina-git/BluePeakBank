import { useState } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SignIn from "../auth/SignIn";

export default function Layout() {

const [signedIn, setSignedIn] = useState(false);

if (!signedIn) {
  return <SignIn onLogin={() => setSignedIn(true)} />;
}

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          height: 100,
          paddingBottom: 10,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 8,
        },

        tabBarActiveTintColor: "#0A1F44",
        tabBarInactiveTintColor: "#94A3B8",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="payments"
        options={{
          title: "Pay",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="swap-horizontal"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}