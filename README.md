# copter-3D

A 3D helicopter simulation/viewer built with Three.js and deployed as an Android app using Capacitor.

## Features

- 3D terrain rendering with Three.js
- Interactive 3D helicopter model viewer
- Cross-platform: runs on Android and any modern web browser
- Background music support (Android requires user interaction to enable)

## Running on PC (Web Browser)

Since the web files are standard HTML/JS, you can run the app directly in a web browser:

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

## Running on Android

See [ANDROID_SETUP.md](ANDROID_SETUP.md) for detailed instructions on building and running the Android app.

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

## Technologies Used

- **Three.js** - 3D graphics library
- **Capacitor** - Cross-platform native runtime
- **Android WebView** - Native Android container
