import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";

import * as Notifications from "expo-notifications";
import { EventSubscription as Subscription } from "expo-notifications";
import { registerForPushNotificationsAsync } from "@/utils/registerForPushNotificationsAsync";
import { useAuthStore } from "@/utils/authStore";
import { supabase } from "@/utils/supabase";

interface NotificationContextType {
  expoPushToken: string | null; // The push token for the device
  notification: Notifications.Notification | null; // The most recent notification received
  error: Error | null;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode; // The children components that will have access to the notification context
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null); // State to store the push token
  const [notification, setNotification] =
    useState<Notifications.Notification | null>(null); // State to store the most recent notification
  const [error, setError] = useState<Error | null>(null); // State to store any error that occurs

  const notificationListener = useRef<Subscription | null>(null); // Ref to store the notification listener subscription
  const responseListener = useRef<Subscription | null>(null); // Ref to store the response listener subscription

  const { user } = useAuthStore();

  useEffect(() => {
    const updateExpoPushToken = async (token: string) => {
      console.log("Updating expo push token:", token);
      console.log("User ID:", user?.id);
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

    registerForPushNotificationsAsync()
      .then((token) => {
        if (token) {
          setExpoPushToken(token);
          updateExpoPushToken(token);
        }
      })
      .catch((err) => {
        setError(err);
      });

    // Listener for incoming notifications
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // Listener for notification responses (when a user interacts with a notification)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification response received:", response);
      });

    return () => {
      // Clean up listeners on unmount
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NotificationContext.Provider
      value={{ expoPushToken, notification, error }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
