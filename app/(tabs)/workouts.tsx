import { FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";

import Screen from "@/components/ui/Screen";

import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import Loading from "@/components/ui/Loading";
export default function Tab() {
  const { data, isLoading } = useQuery({
    queryKey: ["workouts"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Workouts").select();
      if (error) throw error; // Handle errors properly
      return data || []; // Always return an array to prevent crashes
    },
  });

  if (isLoading) {
    return <Loading />;
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
            href={`/${item.id.toString()}`}
          />
        )}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          gap: 20,
        }}
        style={{ width: "100%", marginVertical: "10%" }}
      />
    </Screen>
  );
}
