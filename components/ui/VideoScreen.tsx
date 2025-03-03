import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VideoScreen({ source }: { source: string }) {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View style={styles.container}>
      <VideoView style={styles.video} player={player} allowsFullscreen />
      <TouchableOpacity
        style={styles.controlButton}
        onPress={() => {
          if (isPlaying) {
            player.pause();
          } else {
            player.play();
          }
        }}
      >
        <Ionicons name={isPlaying ? "pause" : "play"} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  video: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.5, // 50% of screen height
    borderRadius: 10,
  },
  controlButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 50,
  },
});
