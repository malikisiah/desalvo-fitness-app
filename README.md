## Local Android Development
### 1. Prerequisites
* **Android Studio:** Installed with the **Standard SDK** (Default Path: `~/Android/Sdk`).
* **Java:** OpenJDK 21 (Verify with `java --version`).
* **Device:** Physical Android device with **Developer Options** enabled.

### 2. Environment Variables
Ensure the following environment variables are set:

```bash
# Android SDK
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Java Home (OpenJDK 21)
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
```

### 3. Device Setup
If you aren't using a USB cable, you must manually "pair" and "connect" your phone to your computer via Wi-Fi

1. Enable Wireless Debugging: Settings > Developer Options > Wireless Debugging (On)
2. Pairing (First time or after reset): 
    * Tap "Pair device with pairing code" on your phone
    * Note the IP:Port and the 6-digit code.
    * Run: `adb pair <IP>:<PAIRING_PORT>`
    * Enter the code when prompted.
3. Connecting 
    * Look at the main Wirrless Debugging screen for the **Connection IP:Port**
    * Run: `adb connect <IP>:<CONNECTION_PORT>`
4. **Verify:** Run `adb devices`. You should see your IP address listed

### 4. Running the build
Once `adb devices` shows your phone, run:
```bash 
npx expo run:android
```