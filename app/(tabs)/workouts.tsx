import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import Box from "@/components/ui/Box";

export default function Tab() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["workouts"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Workouts").select();
      if (error) throw error; // Handle errors properly
      return data || []; // Always return an array to prevent crashes
    },
  });

  if (isLoading) {
    return (
      <Box>
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Text style={{ color: "red" }}>Error loading workouts</Text>
      </Box>
    );
  }

  return (
    <Box>
      <View style={{ width: "100%" }}>
        <Text style={{ textAlign: "center" }}>Workouts</Text>
        <FlatList
          data={data || []} // Ensure data is always an array
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) =>
            item.id?.toString() ?? Math.random().toString()
          }
          renderItem={({ item }) => (
            <View>
              <Text>{item.name.toString() || "Unnamed Workout"}</Text>
            </View>
          )}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            gap: 20,
            paddingBottom: "10%",
          }}
          style={{ width: "100%" }}
        />
      </View>
    </Box>
  );
}
