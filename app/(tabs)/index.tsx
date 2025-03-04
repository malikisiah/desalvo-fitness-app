import Screen from "@/components/ui/Screen";
import { useState } from "react";
import { Text } from "react-native-paper";
import { View } from "react-native";
import Modal from "@/components/ui/Modal";
import VideoScreen from "@/components/ui/VideoScreen";
export default function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <Screen>
      <Modal visible={visible} setVisible={setVisible}>
        <VideoScreen source="https://pnuumfcutriffhbuofvx.supabase.co/storage/v1/object/public/workouts//pushups.mp4" />
      </Modal>
      <View style={{ marginTop: "25%" }}>
        <Text> Home Screen</Text>
      </View>
    </Screen>
  );
}
