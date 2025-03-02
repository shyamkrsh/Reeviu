import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: "#121212",
        borderTopWidth: 0, 
        height: 60, 
      },
      tabBarActiveTintColor: "#fff", 
      tabBarInactiveTintColor: "#888888", 
      tabBarLabelStyle: {
        fontSize: 12, 
        fontWeight: "bold",
      },
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }) => <AntDesign name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="shorts"
        options={{
          title: "Shorts",
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Ionicons name="search-outline" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ size, color }) => <AntDesign name="pluscircleo" size={size+3} color={color} />,
        }}
      />
      <Tabs.Screen
        name="subscriptions"
        options={{
          title: "Subscriptions",
          headerShown: false,
          tabBarIcon: ({ size, color }) => <MaterialIcons name="subscriptions" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="you"
        options={{
          title: "You",
          headerShown: false,
          tabBarIcon: ({ size, color }) => <FontAwesome name="user-circle-o" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
