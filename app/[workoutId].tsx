import { useLocalSearchParams } from "expo-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import Text from "@/components/ui/Text";
import { View, StyleSheet } from "react-native";
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
      <View style={styles.fallbackContainer}>
        <Text>No Workout Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.fullscreenContainer}>
      <Video source={data.videoUrl} />
    </View>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <WorkoutDetails />
    </Suspense>
  );
}

const styles = StyleSheet.create({
  fullscreenContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 0,
    margin: 0,
    backgroundColor: "black",
  },
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
