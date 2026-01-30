# Mobile APK Output Folder

APKs for **User app** and **Vendor app** should be placed here after building.

| App   | Expected APK filename   |
|-------|--------------------------|
| User  | `user-app.apk`           |
| Vendor| `vendor-app.apk`        |

---

## Option A: EAS Build (recommended, no local Android SDK)

1. Install EAS CLI: `npm install -g eas-cli`
2. Log in: `eas login`
3. **User app:**  
   `cd user-mobile` → `eas build --platform android --profile preview`  
   When the build finishes, download the APK and save it here as `user-app.apk`.
4. **Vendor app:**  
   `cd barber-mobile` → `eas build --platform android --profile preview`  
   Download the APK and save it here as `vendor-app.apk`.

---

## Option B: Local build (Android SDK + Java required)

From the **barber_app** root:

```bash
node scripts/build-apks.js
```

This will:

- Run `expo prebuild` in `user-mobile` and `barber-mobile`
- Build Android APK (debug) for each app
- Copy APKs to this folder as `user-app.apk` and `vendor-app.apk`

**Requirements:** Node.js, Java JDK 17+, Android SDK (ANDROID_HOME set).
