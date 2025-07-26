import * as AppleAuthentication from "expo-apple-authentication";
import { View, StyleSheet } from "react-native";

export default function AppleSignInButton({
  onPress,
}: {
  onPress: () => void;
}) {
  return (
    <View style={styles.container}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={styles.button}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    width: 200,
    height: 44,
  },
});
