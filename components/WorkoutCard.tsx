import { Image } from "expo-image";
import Card from "./ui/Card";
import Text from "./ui/Text";
import type { Database } from "@/database.types";
import { View } from "react-native";

export default function WorkoutCard({
  workout,
}: {
  workout: Database["public"]["Tables"]["Workouts"]["Row"];
}) {
  return (
    <Card
      style={{ width: "95%" }}
      image={""}
      title={""}
      content={""}
      href={"/"}
    >
      <View>
        <Image
          source={workout.imageUrl}
          style={{
            flex: 1,
            aspectRatio: "16/9",
            borderRadius: 5,
          }}
        />
        <Text>{workout.name}</Text>
      </View>
    </Card>
  );
}
