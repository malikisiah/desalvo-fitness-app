import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@rneui/themed";
import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { Text, Tile } from "@rneui/themed";
import { Pressable, View } from "react-native";
import { Suspense, useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Screen from "@/components/ui/Screen";
import Modal from "@/components/ui/Modal";
import VideoScreen from "@/components/ui/VideoScreen";

function WorkoutDetails() {
  const { theme } = useTheme();
  const { workoutId } = useLocalSearchParams();
  const [visible, setVisible] = useState(false);

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
    <Screen>
      <Modal visible={visible} setVisible={setVisible}>
        {" "}
        <VideoScreen source={data.videoUrl} />
      </Modal>
      <View style={{ gap: "5%" }}>
        <Tile
          containerStyle={{ maxWidth: "90%" }}
          imageSrc={{ uri: data.imageUrl }}
          title={data.name}
          imageContainerStyle={{ borderRadius: 10 }}
          titleStyle={{ color: theme.colors.black, textAlign: "center" }}
        />
        <Text>{data.content}</Text>
        <Pressable onPress={() => setVisible(true)}>
          <Text style={{ fontFamily: "Inter_900Black" }}>View</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <WorkoutDetails />
    </Suspense>
  );
}
