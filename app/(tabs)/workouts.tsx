import { FlatList, ActivityIndicator } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import Box from "@/components/ui/Box";
import Screen from "@/components/ui/Screen";

import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
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
    <Screen>
      <Text variant="header">Workouts</Text>
      <FlatList
        data={data || []}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            image={item.imageUrl}
            content={item.description}
          />
        )}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          gap: 20,
          paddingBottom: "10%",
        }}
        style={{ width: "100%", marginTop: "5%" }}
      />
    </Screen>
  );
}
