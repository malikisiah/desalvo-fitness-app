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