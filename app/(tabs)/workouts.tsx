import { FlatList, View } from "react-native";
import { Text } from "@rneui/themed";
import { useTheme, Card } from "@rneui/themed";
import { useQuery } from "@tanstack/react-query";

import { Link } from "expo-router";
import { supabase } from "@/utils/supabase";
import Center from "@/components/Center";

export default function Tab() {
  const { theme } = useTheme();

  const { data } = useQuery({
    queryKey: ["workouts"],
    queryFn: async () => {
      const { data } = await supabase.from("Workouts").select();
      return data;
    },
  });

  return (
    <Center>
      <View style={{ width: "100%" }}>
        <Text h2> Workouts</Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              containerStyle={{
                borderColor: theme.colors.background,
                shadowColor: theme.colors.background,
                maxWidth: "75%",
                backgroundColor: theme.colors.background,
              }}
              wrapperStyle={{
                // borderWidth: 1,
                // borderRadius: 10,
                // borderColor: theme.colors.grey0,
                padding: 10,
              }}
            >
              <Card.Image
                style={{ borderRadius: 10 }}
                source={{
                  uri: item.imageUrl,
                }}
              />
              <Card.Title>
                <View
                  style={{
                    flexDirection: "row",
                    padding: "2%",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.name}</Text>
                  <Link href={`/${item.id}`}>
                    <Text style={{ color: theme.colors.secondary }}>View</Text>
                  </Link>
                </View>
              </Card.Title>

              <Text style={{ marginBottom: 10, textAlign: "center" }}>
                {item.description}
              </Text>
            </Card>
          )}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingBottom: "10%",
          }}
          style={{ width: "100%" }}
        />
      </View>
    </Center>
  );
}
