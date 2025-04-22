import { StyleSheet, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

export default function Video({ source }: { source: string }) {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView style={styles.video} player={player} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: "9/16",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
