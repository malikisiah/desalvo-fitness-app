import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VideoView } from "expo-video";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface VideoViewWithBackButtonProps {
  player: any;
  onBackPress: () => void;
  // Add other VideoView props as needed
  [key: string]: any;
}

export function VideoViewWithBackButton({
  player,
  onBackPress,
  ...videoProps
}: VideoViewWithBackButtonProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <VideoView player={player} {...videoProps} style={styles.video} />

      {/* Back button overlay */}
      <TouchableOpacity
        style={[styles.backButton, { top: insets.top + 10 }]}
        onPress={onBackPress}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  video: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
