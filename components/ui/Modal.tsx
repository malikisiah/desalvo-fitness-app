import { View, Modal as RNModal, StyleSheet, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Modal({
  visible,
  setVisible,
  children,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <Ionicons name="close" size={30} color="white" />
          </Pressable>
          {children}
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.18)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    height: "80%",
    backgroundColor: "black",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
  },
});
