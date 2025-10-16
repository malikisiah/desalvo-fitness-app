import Box from "@/components/ui/Box";
import SafeAreaView from "@/components/ui/SafeAreaView";
import Text from "@/components/ui/Text";
import { Pressable, Modal, View, Alert } from "react-native";
import { useState } from "react";
import { supabase } from "@/utils/supabase";
import { useAuthStore } from "@/utils/authStore";
import { clearGoogleSignIn, clearAppleSignIn } from "@/components/Auth";
// import { Theme } from "@/utils/theme";

export default function Tab() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { clearAuth } = useAuthStore();

  const handleDeletePress = () => {
    setShowDeleteModal(true);
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  // ...existing code...
  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("No authenticated user found");
      }

      console.log("Deleting user profile for ID:", user.id);

      // Delete user's profile data FIRST (while user is still authenticated)
      const {
        error: deleteError,
        data,
        count,
      } = await supabase
        .from("profiles")
        .delete({ count: "exact" })
        .eq("id", user.id);

      console.log("Delete response:", { data, deleteError, count });

      if (deleteError) {
        console.error("Delete error details:", deleteError);
        throw new Error(`Failed to delete profile: ${deleteError.message}`);
      }

      console.log(`Successfully deleted ${count} profile(s)`);

      // Delete the actual auth user using the RPC function
      const { error: deleteUserError } = await supabase.rpc(
        "delete_own_account"
      );

      if (deleteUserError) {
        console.error("Delete user error:", deleteUserError);
        throw new Error(`Failed to delete user: ${deleteUserError.message}`);
      }

      console.log("Auth user deleted successfully");

      // Close modal first to improve UX
      setShowDeleteModal(false);

      // Explicitly clear ALL auth data from the store BEFORE signing out
      // This prevents the auth listener from re-setting the session
      clearAuth();

      // Sign out from Supabase with scope 'local' to clear everything
      await supabase.auth.signOut({ scope: "local" });

      // Clear third-party authentication providers
      await clearGoogleSignIn();
      await clearAppleSignIn();

      // The root layout will automatically redirect to /sign-in when session is cleared
    } catch (error) {
      console.error("Error deleting account:", error);
      Alert.alert(
        "Error",
        `Failed to delete account: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        [{ text: "OK" }]
      );
    } finally {
      setIsDeleting(false);
    }
  };
  // ...existing code...

  return (
    <SafeAreaView>
      <Box justifyContent="center" alignItems="center" flex={1} gap="l">
        <Text variant="header">Account</Text>
        <Pressable
          onPress={handleDeletePress}
          style={{ padding: 10, backgroundColor: "#e27070ff", borderRadius: 5 }}
        >
          <Text>Delete All Data</Text>
        </Pressable>
      </Box>

      <Modal
        visible={showDeleteModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancel}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              padding: 24,
              width: "100%",
              maxWidth: 400,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 16,
                textAlign: "center",
                color: "#333",
              }}
            >
              Delete All Data
            </Text>

            <Text
              style={{
                fontSize: 16,
                marginBottom: 24,
                textAlign: "center",
                color: "#666",
                lineHeight: 22,
              }}
            >
              This action will permanently delete all your data including
              workouts, progress, and account information. This cannot be
              undone.
            </Text>

            <View
              style={{
                flexDirection: "row",
                gap: 12,
              }}
            >
              <Pressable
                onPress={handleCancel}
                style={{
                  flex: 1,
                  padding: 12,
                  backgroundColor: "#f0f0f0",
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                onPress={handleDelete}
                disabled={isDeleting}
                style={{
                  flex: 1,
                  padding: 12,
                  backgroundColor: isDeleting ? "#ccc" : "#e27070ff",
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  {isDeleting ? "Deleting..." : "Continue"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
