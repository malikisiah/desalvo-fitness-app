import { useRouter } from "expo-router";
import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import Auth from "@/components/Auth";
import { supabase } from "@/utils/supabase";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.replace("/(tabs)");
    }
  });

  return <Auth />;
}
