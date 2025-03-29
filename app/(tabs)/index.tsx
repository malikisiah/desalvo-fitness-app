import Text from "@/components/ui/Text";
import Screen from "@/components/ui/Screen";
import Box from "@/components/ui/Box";
import { useNotification } from "@/context/NotificationContext";

export default function Index() {
  const { expoPushToken, notification } = useNotification();
  return (
    <Screen>
      <Text variant="header">My Push Token</Text>
      <Box margin="m">
        <Text>{expoPushToken}</Text>
      </Box>
      <Text variant="header">Latest Notification</Text>
      <Box margin="m">
        <Text>
          {notification?.request.content.data
            ? JSON.stringify(notification.request.content.data)
            : "No data available"}
        </Text>
      </Box>
    </Screen>
  );
}
