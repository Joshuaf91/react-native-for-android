# React Native Inital setup

###### install homebrew
In your comand line type (or copy and paste):

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

###### install node and watchman

```
$ brew install node
$ brew install watchman
```

###### install react-native-cli

```
npm install -g react-native-cli
```

#### Android-react-native set up
(First Time setup only)
#####If you are setting up for iOS go to [iOS Setup](#ios-react-native-set-up)

###### 1. Android studio

Android Studio requires the Java SE Development Kit(JDK), version 8. 

In your terminal type
```
$ javac -version
```
If you get 1.8.x_xxx, download [Android Studio](https://developer.android.com/studio/install.html). Install the AVD and HAXM.

- To download Java go here [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

Then type this into your terminal:

```
brew install android-sdk
```


###### 2. Android JDK

Choose Custom installation when running Android Studio for the first time. Make sure the boxes next to all of the following are checked:

- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM)
- Android Virtual Device

Then, click "Next" to install all of these components.

Now, on the bottom of your window press `Configure` > `SDK Manager`

###### 3. Downloading Marshmallow

Check Android 6.0(Marshmallow). Check "Show Package Details" on the bottom right and then look for "intel x86 Atom System Image" underneath 6.0(Marshmallow). Click OK to start downloading/installing.

Once you’re done, click “Launch Standalone SDK Manager” near the bottom.

Check off "Android SDK Build-tools 23.0.1" and install it.

######4. Setting up your Virtual Device

[download virtualbox](https://www.virtualbox.org/wiki/Downloads)

######5. Genymotion set up

You're going to need to creat an online sign up. Remember this login because you will need it to use genymotion 

 - Go to [genymotion](https://www.genymotion.com/account/login/) sign up register and download/install
open genymotion and add the device of your choice
go into "setting > ADB" and in the Android SDK enter `/usr/local/Cellar/android-sdk/24.4.1_.1`

<!-- Once that's done, go to your terminal and type:

```
android avd
```

After the AVD Manager pops up, click the "create..." button on the right and start setting up your first android virtual device:

- Give it a name => We recommend something like "reactNative"
- Pick a device => Your preference. See if you can find your own phone!
- Pick a target => We recommend 6.0 Marshmallow
- For CPU => Pick Intel Atom x86
- Pick a  Skin => We recommend Skin with dynamic hardware control
- Check off use host GPU (it's near the bottom of the window and occasioanlly gets cut off on smaller displays. You may have to make the window larger) -->


###### 6. Set up the ANDROID_HOME environment variable
In your terminal type:
```
sudo vim ~/.bashrc
```
press `i` to enter `INSERT` mode and enter the following:
```
export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

Press `esc` and then type `:wq!` to escape vim.


#### iOS-react-native-set-up

###### 1. Install xcode
###### 2. Make some coffee while you wait