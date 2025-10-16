import { useEffect } from "react";
import Auth from "@/components/Auth";
import { supabase } from "@/utils/supabase";
import { useAuthStore } from "@/utils/authStore";
import { Image } from "expo-image";
import Box from "@/components/ui/Box";
import SafeAreaView from "@/components/ui/SafeAreaView";

export default function SignIn() {
  const { setSession } = useAuthStore();

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };
    fetchSession();

    const { data: authListner } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListner.subscription.unsubscribe();
    };
  }, [setSession]);

  return (
    <SafeAreaView>
      <Box justifyContent="center" alignItems="center" flex={1} gap="l">
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: "100%", height: "25%" }}
        />
        <Auth />
      </Box>
    </SafeAreaView>
  );
}
