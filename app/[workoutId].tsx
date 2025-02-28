import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@rneui/themed";
import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { Text, Tile } from "@rneui/themed";
import { View } from "react-native";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import Center from "@/components/Center";

function WorkoutDetails() {
  const { theme } = useTheme();
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
      <SafeAreaView
        style={{ backgroundColor: theme.colors.background, flex: 1 }}
      >
        <View
          style={{ flex: 1, alignItems: "center", marginTop: "20%" }}
        ></View>
        <Text>No Workout Found</Text>
      </SafeAreaView>
    );
  }

  return (
    <Center>
      <View>
        <Tile
          containerStyle={{ maxWidth: "90%" }}
          imageSrc={{ uri: data.imageUrl }}
          title={data.name}
          imageContainerStyle={{ borderRadius: 10 }}
          titleStyle={{ color: theme.colors.black, textAlign: "center" }}
        />
        <Text>{data.content}</Text>
      </View>
    </Center>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <WorkoutDetails />
    </Suspense>
  );
}
