import { useAuthStore } from "@/utils/authStore";
import Text from "@/components/ui/Text";
import Box from "@/components/ui/Box";
import SafeAreaView from "@/components/ui/SafeAreaView";

export default function Index() {
  const { profile } = useAuthStore();

  return (
    <SafeAreaView>
      <Box justifyContent="center" alignItems="center" flex={1} gap="l">
        <Text variant="header">Hello, {profile?.full_name}</Text>
      </Box>
    </SafeAreaView>
  );
}
