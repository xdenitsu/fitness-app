import { Stack, router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { useTheme } from "react-native-paper";

function ProfileLayout() {
  const theme = useTheme();

  

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      />
    </Stack>
  );
}

export default ProfileLayout;
