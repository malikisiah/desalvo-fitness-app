import { Redirect } from "expo-router";
import { useAuthStore } from "@/utils/authStore";

export default function Index() {
  const { session } = useAuthStore();

  // Simple redirect based on auth state
  if (session) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/sign-in" />;
}
