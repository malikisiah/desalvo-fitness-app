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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Loading from "@/components/ui/Loading";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
        <Box padding="m" gap="s">
          <Text variant="subheader" fontWeight={"condensedBold"}>
            <MaterialCommunityIcons
              name="arm-flex-outline"
              size={24}
              color="black"
            />
            How To Perform:
          </Text>
          <Text>{data.content}</Text>
        </Box>
        <Box padding="m" gap="s">
          <Text variant="subheader">
            <FontAwesome
              name="hand-stop-o"
              size={24}
              color="black"
              style={{ color: "red" }}
            />{" "}
            What to Avoid
          </Text>
          <Text>{data.content}</Text>
        </Box>
      </ScrollView>
    </Screen>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <WorkoutDetails />
    </Suspense>
  );
}
