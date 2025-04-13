import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import Text from "@/components/ui/Text";
import { View } from "react-native";
import React, { Suspense } from "react";
import Video from "@/components/ui/Video";
import Loading from "@/components/ui/Loading";

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

  return <Video source={data.videoUrl} />;
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <WorkoutDetails />
    </Suspense>
  );
}
