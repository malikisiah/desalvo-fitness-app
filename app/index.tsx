import { useRouter } from "expo-router";

import { useEffect } from "react";
import Auth from "@/components/Auth";
import { supabase } from "@/utils/supabase";
import { useAuthStore } from "@/utils/authStore";

export default function Index() {
  const { setSession, session } = useAuthStore();

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

  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.replace("/(tabs)");
    }
  });

  return <Auth />;
}
