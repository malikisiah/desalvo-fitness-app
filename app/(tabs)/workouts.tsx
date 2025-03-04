import { FlatList, View } from "react-native";
import { Text, Card, Button } from "react-native-paper";

import { useQuery } from "@tanstack/react-query";

// import { Link } from "expo-router";
import { supabase } from "@/utils/supabase";
import Screen from "@/components/ui/Screen";
import { Image } from "expo-image";

export default function Tab() {
  const { data } = useQuery({
    queryKey: ["workouts"],
    queryFn: async () => {
      const { data } = await supabase.from("Workouts").select();
      return data;
    },
  });

  return (
    <Screen>
      <View style={{ width: "100%" }}>
        <Text>Workouts</Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              style={{
                maxWidth: "75%",
              }}
            >
              <Image style={{ borderRadius: 10 }} source={item.imageUrl} />
              <Card.Title title={item.name} />

              <Card.Content>
                <Text style={{ marginBottom: 10, textAlign: "center" }}>
                  {item.description}
                </Text>
              </Card.Content>
              <Card.Cover source={{ uri: item.imageUrl }} />
              <Card.Actions>
                <Button> Ok</Button>
              </Card.Actions>
            </Card>
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
    </Screen>
  );
}
