import { View, FlatList, TouchableWithoutFeedback } from "react-native";
import { Text } from "@rneui/themed";
import { useTheme, Card } from "@rneui/themed";
import { useQuery } from "@tanstack/react-query";
import { SafeAreaView } from "react-native-safe-area-context";

import { supabase } from "@/utils/supabase";

export default function Index() {
  const { theme } = useTheme();

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await supabase.from("myTable").select();
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
            <TouchableWithoutFeedback onPress={() => console.log(item.content)}>
              <Card
                containerStyle={{
                  backgroundColor: "black",
                  borderWidth: 0,
                  minWidth: 275,
                }}
                wrapperStyle={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: theme.colors.grey0,
                  padding: 10,
                }}
              >
                <Card.Title>
                  <Text>{item.id}</Text>
                </Card.Title>
                <Card.Divider />
                <Card.Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                />
                <Text style={{ marginBottom: 10, textAlign: "center" }}>
                  {item.content}
                </Text>
              </Card>
            </TouchableWithoutFeedback>
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
