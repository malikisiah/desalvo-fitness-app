import { FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import Screen from "@/components/ui/Screen";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/utils/theme";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import Loading from "@/components/ui/Loading";
import Input from "@/components/ui/Input";

import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";

export default function Tab() {
  const theme = useTheme<Theme>();
  const tabBarHeight = useBottomTabBarHeight();

  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["workouts"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Workouts").select();
      if (error) throw error; // Handle errors properly
      return data || []; // Always return an array to prevent crashes
    },
  });

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Screen>
      <Text variant="header">Workouts</Text>

      <Input
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Search..."
        placeholderTextColor={theme.colors.primary}
      />

      <FlatList
        data={filteredData || []}
        numColumns={2}
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
        columnWrapperStyle={{
          justifyContent: "center",
          gap: "10%",
        }}
        contentContainerStyle={{
          gap: 20,
          marginTop: "2%",
          paddingBottom: tabBarHeight,
        }}
        style={{
          width: "100%",
          marginBottom: tabBarHeight + 20,
          padding: "5%",
        }}
      />
    </Screen>
  );
}
