import EditScreenInfo from "@/components/EditScreenInfo";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { supabase } from "@/utils/supabase";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { View } from "@/components/ui/view";
import { ScrollView } from "react-native";

export default function Tab2() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["myTable"],
    queryFn: async () => {
      const { data, error } = await supabase.from("myTable").select();
      if (error) {
        throw new Error(error.message);
      }
      return data ?? [];
    },
  });

  return (
    <ScrollView>
      <Center className="flex-1">
        <Heading className="font-bold text-2xl">Expo V3 - Tab 1</Heading>
        <Divider className="my-[30px] w-[80%]" />
        <Text className="p-4">
          Example below to use gluestack-ui components.
        </Text>
        <EditScreenInfo path="app/(app)/(tabs)/tab1.tsx" />
        <View className="flex flex-wrap justify-center gap-4">
          {data &&
            data.map((item, idx) => (
              <Card size="md" key={idx} variant="elevated" className="m-3">
                <Heading size="md" className="mb-1">
                  {item.content}
                </Heading>
                <Text size="sm">This is item #{idx + 1}</Text>
              </Card>
            ))}
        </View>
      </Center>
    </ScrollView>
  );
}
