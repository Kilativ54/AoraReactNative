import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const RooLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
};

export default RooLayout;
