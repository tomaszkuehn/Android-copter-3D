// (C) 2025 by T.Kuehn @ AI
// Capacitor initialization for Android
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';

// Check if running on native platform
const isNative = Capacitor.isNativePlatform();
const isAndroid = Capacitor.getPlatform() === 'android';

console.log('Platform:', Capacitor.getPlatform());
console.log('Is Native:', isNative);

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Hide splash screen after app loads
    if (isNative) {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }

    // Handle Android back button
    if (isAndroid) {
        App.addListener('backButton', () => {
            // Could add exit confirmation or navigation here
            App.exitApp();
        });
    }

    // Fix audio for Android WebView
    if (isAndroid) {
        fixAndroidAudio();
    }
});

// Fix audio playback issues on Android WebView
function fixAndroidAudio() {
    const audio = document.getElementById('soundtrack');
    if (!audio) return;

    // Android WebView requires special handling
    audio.addEventListener('canplaythrough', () => {
        console.log('Audio can play through');
    }, { once: true });

    // Override the audio init to work better on Android
    const audioToggle = document.getElementById('audio-toggle');
    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            if (audio.paused) {
                // Create a promise chain that works on Android
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(err => {
                        console.log('Audio play failed:', err);
                        // Show user a message
                        alert('Tap OK to enable sound, then tap the sound button again');
                    });
                }
            } else {
                audio.pause();
            }
        }, { once: false });
    }
}

// Export for use in other modules if needed
export { isNative, isAndroid };
