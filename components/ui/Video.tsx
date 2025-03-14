import { StyleSheet, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

export default function Video({
  source,
  text,
}: {
  source: string;
  text: string;
}) {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
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
    aspectRatio: "3/4",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
