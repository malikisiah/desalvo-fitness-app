import { useAuthStore } from "@/utils/authStore";
import { useEffect } from "react";
import Text from "@/components/ui/Text";
import Box from "@/components/ui/Box";
import SafeAreaView from "@/components/ui/SafeAreaView";
import { supabase } from "@/utils/supabase";
import { useNotification } from "@/context/NotificationContext";

export default function Index() {
  const { profile, user } = useAuthStore();

  const { expoPushToken } = useNotification();

  useEffect(() => {
    if (!expoPushToken || !user) return;

    const updateExpoPushToken = async (token: string) => {
      if (user) {
        const { error } = await supabase
          .from("profiles")
          .update({ expo_push_token: token })
          .eq("id", user.id);

        if (error) {
          console.error("Error updating expo push token:", error);
        }
      }
    };

    updateExpoPushToken(expoPushToken);
  }, [user, expoPushToken]);

  return (
    <SafeAreaView>
      <Box justifyContent="center" alignItems="center" flex={1} gap="l">
        <Text variant="header">Hello, {profile?.full_name}</Text>
      </Box>
    </SafeAreaView>
  );
}
