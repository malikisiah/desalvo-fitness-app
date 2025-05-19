import Text from "@/components/ui/Text";

import Box from "@/components/ui/Box";
import { useNotification } from "@/context/NotificationContext";
import SafeAreaView from "@/components/ui/SafeAreaView";

export default function Index() {
  const { expoPushToken, notification, error } = useNotification();
  return (
    <SafeAreaView>
      <Box justifyContent="center" alignItems="center" flex={1} gap="l">
        <Text variant="header">My Push Token</Text>
        <Box margin="m">
          <Text>{expoPushToken}</Text>
          {error && (
            <Box>
              <Text>{error.message}</Text>
              <Text>{String(error.cause)}</Text>
            </Box>
          )}
        </Box>
        <Text variant="header">Latest Notification</Text>
        <Box margin="m">
          <Text>
            {notification?.request.content.data
              ? JSON.stringify(notification.request.content.data)
              : "No data available"}
          </Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
