import { Dimensions, StyleSheet, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import Text from "./Text";

const { width, height } = Dimensions.get("window"); // Get screen width for dynamic sizing

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
      <View style={styles.overlay}>
        <Text variant="header" color="textAccent">
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: width * (16 / 9), // Adjust for vertical 9:16 aspect ratio
    position: "relative", // Allows absolute positioning of overlay
  },
  video: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -width / 4 }, { translateY: -height / 2.5 }], // Adjust for perfect centering
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
