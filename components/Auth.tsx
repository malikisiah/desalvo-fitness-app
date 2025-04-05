import { supabase } from "@/utils/supabase";
import Screen from "./ui/Screen";
import Box from "./ui/Box";
import {
  GoogleSignin,
  isSuccessResponse,
  isErrorWithCode,
  statusCodes,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
export default function Auth() {
  const handleGoogleSignin = async () => {
    try {
      // Trigger the Google sign-in flow
      GoogleSignin.configure({
        webClientId:
          "278447901168-7oons3dihfc0i4v7aj6pa2qmdc7nitmq.apps.googleusercontent.com",
      });
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        // Get the ID token from the Google response
        const {
          data: { idToken },
        } = response;
        // Use the ID token to sign in with Supabase
        if (idToken) {
          const { error } = await supabase.auth.signInWithIdToken({
            provider: "google",
            token: idToken, // Pass the ID token from Google
          });

          if (error) {
            console.error("Failed to sign in with Supabase:", error);
            return;
          }
        } else {
          console.error("ID token is null");
        }
      }
    } catch (error) {
      if (
        isErrorWithCode(error) &&
        error.code === statusCodes.SIGN_IN_CANCELLED
      ) {
        // User cancelled the sign-in flow
        console.log("User cancelled the Google sign-in");
      } else if (
        isErrorWithCode(error) &&
        error.code === statusCodes.IN_PROGRESS
      ) {
        // Sign-in is in progress already
        console.log("Google sign-in is in progress");
      } else {
        // Handle other errors
        console.error("Google sign-in failed:", error);
      }
    }
  };

  return (
    <Screen>
      <Box>
        <GoogleSigninButton onPress={() => handleGoogleSignin()} />
      </Box>
    </Screen>
  );
}
