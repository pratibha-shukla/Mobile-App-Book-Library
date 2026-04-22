# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

 Project Structure
app/: This directory contains your main logic using file-based routing.
login.jsx: Your authentication screen.
index.jsx: Your main library view.
_layout.jsx: The main navigation wrapper.
components/: Reusable UI elements.

 Resetting the Project
If you want to start fresh and move this library code to an example folder, run:
bash
npm run reset-project

3. Start the Project
In your VS Code terminal, run:
bash
npm install
npx expo start

2. Launch the Development Environment
Open Android Studio: Start your Pixel 9 emulator by clicking the green Play button.
Wait for Home Screen: Ensure the phone is fully booted and you have "Cleared All" notifications from the screen.
Split Screen: Position VS Code on the left half of your screen and the Emulator on the right.

Setting up an Android Emulator on Windows is the best way to get a phone-like experience on your screen. Unlike iOS, this is fully supported on Windows.

Step 1: Install Android Studio
You must install Android Studio
Download and Run: Get the installer from the official site.
Standard Setup: Choose the "Standard" installation type.
Components: Ensure the boxes for Android SDK, Android SDK Platform, and Android Virtual Device are checked.

Step 2: Create a Virtual Device (Emulator)
Open Android Studio. On the Welcome screen, click More Actions > Virtual Device Manager (sometimes called AVD Manager).
Click Create Device.
Choose Hardware: Select a phone (like Pixel 8) and click Next.
System Image: Select a version (like VanillaIceCream or UpsideDownCake) and click the "Download" icon next to it. Once finished, click Next.
Finish: Click Finish. You will now see your phone in the list. Press the green "Play" button to start it.

Step 3: Configure Environment Variables
To let Expo "talk" to your new emulator, you must tell Windows where the Android tools are:
Open Windows Search, type "Edit the system environment variables," and open it.
Click Environment Variables.
Under User variables, click New:
Variable name: ANDROID_HOME
Variable value: %LOCALAPPDATA%\Android\Sdk

4 - open vs code in half screen 
5 - open your android vertual phone in half screen 
6 - clear all from your phone home screen 
7- npx expo start
8 - type "a" on keybord 
9 - open expo go and type url like exp://127.0.0.1:8083


install 

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
