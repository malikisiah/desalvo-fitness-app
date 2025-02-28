import { View, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import { useTheme, Card } from "@rneui/themed";
import { useQuery } from "@tanstack/react-query";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { supabase } from "@/utils/supabase";

export default function Index() {
  const { theme } = useTheme();

  const { data } = useQuery({
    queryKey: ["workouts"],
    queryFn: async () => {
      const { data } = await supabase.from("Workouts").select();
      return data;
    },
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text h2> Main Page</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              containerStyle={{
                backgroundColor: theme.colors.grey0,
                borderWidth: 0,
                borderRadius: 10,
                minWidth: 275,
              }}
              wrapperStyle={{
                // borderWidth: 1,
                // borderRadius: 10,
                // borderColor: theme.colors.grey0,
                padding: 10,
              }}
            >
              <Card.Image
                source={{
                  uri: item.imageUrl,
                }}
              />
              <Card.Title>
                <Text>{item.name}</Text>
              </Card.Title>
              <Card.Divider />
              <Text style={{ marginBottom: 10, textAlign: "center" }}>
                {item.description}
              </Text>
              <Link href={`/${item.id}`}>
                <Text
                  style={{ textAlign: "center", color: theme.colors.secondary }}
                >
                  View
                </Text>
              </Link>
            </Card>
          )}
          contentContainerStyle={{
            flexGrow: 1,
            width: "100%",
            alignItems: "center",
            paddingBottom: 20,
          }}
          style={{ width: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
}
