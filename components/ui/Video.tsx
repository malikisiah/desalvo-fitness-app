import { StyleSheet, View } from "react-native";
import { useVideoPlayer } from "expo-video";
import { VideoViewWithBackButton } from "../VideoViewWithBackButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function Video({ source }: { source: string }) {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <VideoViewWithBackButton
        player={player}
        onBackPress={() => {
          // Handle back navigation
          router.back();
          // or router.back() if using Expo Router
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
