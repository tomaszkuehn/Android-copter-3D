# Copter 3D - Android App with Capacitor

## Prerequisites

Before building the Android app, install these tools:

1. **Node.js** (v18 or later): https://nodejs.org/
2. **Android Studio**: https://developer.android.com/studio
3. **Java JDK** (v17 recommended): https://www.oracle.com/java/technologies/downloads/

## Running on PC (Web Browser)

The app can also run directly in a web browser without building the Android app:

### Option 1: Using Python's built-in server
```bash
cd d:\kody\git\copter-3D\android\app\src\main\assets\public
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Using Node.js http-server
```bash
npx http-server d:\kody\git\copter-3D\android\app\src\main\assets\public -p 8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: Using VS Code Live Server
Install the "Live Server" extension in VS Code, right-click on `index.html` in the `android/app/src/main/assets/public/` folder, and select "Open with Live Server".

## Setup Instructions for Android

### Step 1: Install Node.js
Download and install Node.js from https://nodejs.org/

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Capacitor dependencies
Open terminal in the project folder (`d:\kody\git\copter-3D`) and run:

```bash
npm install
```

This will install:
- @capacitor/core
- @capacitor/android
- @capacitor/cli

### Step 3: Add Android platform

```bash
npx capacitor add android
```

This creates the `android/` folder with the native Android project.

### Step 4: Sync web assets

```bash
npx capacitor sync android
```

This copies your web files to the Android project.

### Step 5: Open in Android Studio

```bash
npx capacitor open android
```

Or manually open the `android/` folder in Android Studio.

### Step 6: Run the app

In Android Studio:
1. Connect an Android device or start an emulator
2. Click the "Run" button (green play icon)
3. Select your device/emulator

## Project Structure

```
copter-3D/
├── README.md
├── ANDROID_SETUP.md
├── package.json              # npm dependencies (Capacitor)
├── capacitor.config.json     # Capacitor configuration
├── android/                  # Native Android project
│   └── app/
│       └── src/
│           └── main/
│               └── assets/
│                   └── public/   # Web source files (HTML/JS)
│                       ├── index.html
│                       ├── index.js
│                       ├── terrains.txt
│                       └── js/
│                           └── viewer.js
└── LICENSE
```

## Troubleshooting

### Audio not playing on Android
- Tap the sound button (🔊) to enable audio (required by Android autoplay policy)
- Check Android logcat for audio errors
- Ensure audio files are properly placed in the `android/app/src/main/assets/public/` folder

### App crashes on startup
- Check that all web files are in the correct location (`android/app/src/main/assets/public/`)
- Run `npx capacitor sync android` to re-sync
- Clean build in Android Studio: Build → Clean Project

### WebView issues
- The app uses Android WebView to display content
- Ensure minimum SDK version is 22+ (Android 5.1+)
- Check `android/app/build.gradle` for configuration

### Running on PC via web server
If running via a local web server (see "Running on PC" section above):
- Ensure you're serving from the `android/app/src/main/assets/public/` directory
- Some features may require a server (not just opening `index.html` directly)
- Use one of the three methods described in the "Running on PC" section

## Building Release APK

In Android Studio:
1. Build → Generate Signed Bundle / APK
2. Select APK
3. Create new keystore or use existing
4. Build the release version

The APK will be in `android/app/release/`

## Notes

- The app uses Capacitor 6.x which requires Android 5.1+ (API 22+)
- Three.js runs in the WebView, so performance depends on device
- For better performance, consider using a device with Android 10+
- The web source files are located in `android/app/src/main/assets/public/`
- To run on PC, serve the files from that directory using a local web server
