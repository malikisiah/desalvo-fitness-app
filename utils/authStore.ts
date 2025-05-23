import { create } from "zustand";
import { supabase } from "./supabase";
import { Session, User } from "@supabase/supabase-js";

interface Profile {
  full_name: string | null;
  avatar_url: string | null;
}

interface AuthState {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  setSession: (session: Session | null) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  profile: null,
  setSession: (session) => {
    set({ session, user: session?.user ?? null });

    if (session?.user) {
      const fetchProfile = async () => {
        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, avatar_url")
          .eq("id", session.user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
        } else {
          set({ profile: data });
        }
      };
      fetchProfile();
    } else {
      set({ profile: null });
    }
  },
  logout: async () => {
    await supabase.auth.signOut();
    set({ session: null, user: null });
  },
}));
