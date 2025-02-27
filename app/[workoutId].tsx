import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@rneui/themed";
import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { Text } from "@rneui/themed";
import { Tile } from "@rneui/themed";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import { View } from "react-native";

export default function Page() {
  const { theme } = useTheme();
  const { workoutId } = useLocalSearchParams();

  const { data } = useSuspenseQuery({
    queryKey: ["workout"],
    queryFn: async () => {
      const { data } = await supabase
        .from("Workouts")
        .select()
        .eq("id", Number(workoutId))
        .single();
      return data;
    },
  });

  if (data) {
    return (
      <Suspense fallback={<Skeleton />}>
        <SafeAreaView
          style={{ backgroundColor: theme.colors.background, flex: 1 }}
        >
          <View style={{ flex: 1, alignItems: "center", marginTop: "20%" }}>
            <Tile
              imageSrc={{ uri: data.imageUrl }}
              title={data.name}
              imageContainerStyle={{ borderRadius: 10 }}
              titleStyle={{ color: theme.colors.white, textAlign: "center" }}
            />
            <Text>{data.content}</Text>
          </View>
        </SafeAreaView>
      </Suspense>
    );
  }
}
