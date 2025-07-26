import { supabase } from "@/utils/supabase";
import * as AppleAuthentication from "expo-apple-authentication";

import Box from "./ui/Box";
import {
  GoogleSignin,
  isSuccessResponse,
  isErrorWithCode,
  statusCodes,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import AppleSignInButton from "./AppleSignInButton";
import { Platform } from "react-native";
export default function Auth() {
  const handleGoogleSignin = async () => {
    try {
      // Trigger the Google sign-in flow
      GoogleSignin.configure({
        webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
        iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
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

  const handleAppleSignIn = async () => {
    try {
      const creds = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // Sign in via Supabase Auth
      if (creds.identityToken) {
        const { error } = await supabase.auth.signInWithIdToken({
          provider: "apple",
          token: creds.identityToken,
        });

        if (error) {
          console.error("Failed to sign in with Supabase:", error);
          return;
        }
      }
    } catch (error) {
      console.error("Apple Sign-In error:", error);
      return;
    }
  };

  return (
    <Box>
      <GoogleSigninButton onPress={() => handleGoogleSignin()} />
      {Platform.OS === "ios" && (
        <AppleSignInButton onPress={() => handleAppleSignIn()} />
      )}
    </Box>
  );
}
