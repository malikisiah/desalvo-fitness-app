import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: "#008dcf",
        headerStyle: {
          backgroundColor: "#1E1E1E",
          borderBottomWidth: 1,
          borderBottomColor: "#2C2F33",
        },
        tabBarStyle: {
          backgroundColor: "#1E1E1E",
          borderTopWidth: 1,
          borderColor: "#2C2F33",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="tab1"
        options={{
          title: "Tab 1",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "Tab 2",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="star-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
