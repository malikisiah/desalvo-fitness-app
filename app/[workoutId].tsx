import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { Text } from "react-native";
import { Image } from "expo-image";
import { View } from "react-native";
import { Suspense } from "react";
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

  // const { data } = useSuspenseQuery({
  //   queryKey: ["workout", workoutId],
  //   queryFn: async () => {
  //     return new Promise((resolve) => {
  //       setTimeout(async () => {
  //         const { data } = await supabase
  //           .from("Workouts")
  //           .select()
  //           .eq("id", Number(workoutId))
  //           .single();
  //         resolve(data);
  //       }, 10000); // 5-second delay
  //     });
  //   },
  // });

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
    <Box>
      <View style={{ gap: "5%", maxWidth: "90%" }}>
        <Image style={{ borderRadius: 10 }} source={data.imageUrl} />
        <Text> {data.name}</Text>
        <Text>{data.content}</Text>
      </View>
    </Box>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Text> Loading... </Text>}>
      <WorkoutDetails />
    </Suspense>
  );
}
