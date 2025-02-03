import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import { Database } from "~/database.types";

export const db = createClient<Database>(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",

);
