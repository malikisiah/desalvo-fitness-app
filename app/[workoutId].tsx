import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import Text from "@/components/ui/Text";
import { ScrollView, View } from "react-native";
import React, { Suspense } from "react";
import Screen from "@/components/ui/Screen";
import Video from "@/components/ui/Video";
import Box from "@/components/ui/Box";

function WorkoutDetails() {
  const { workoutId } = useLocalSearchParams();

  const { data } = useSuspenseQuery({
    queryKey: ["workout", workoutId], // Ensure a unique query key
    queryFn: async () => {
      const { data } = await supabase
        .from("Workouts")
        .select()
        .eq("id", Number(workoutId))
        .single();
      return data;
    },
  });

  if (!data) {
    return (
      <SafeAreaView>
        <View
          style={{ flex: 1, alignItems: "center", marginTop: "20%" }}
        ></View>
        <Text>No Workout Found</Text>
      </SafeAreaView>
    );
  }

  return (
    <Screen>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Video source={data.videoUrl} text={data.name} />
        <Box padding="m">
          <Text>{data.content}</Text>
        </Box>
      </ScrollView>
    </Screen>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Text> Loading... </Text>}>
      <WorkoutDetails />
    </Suspense>
  );
}
