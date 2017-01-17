# React Native Inital setup

###### install homebrew
In your comand line type
>* "/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

###### install nodeand watchman
> "brew install node"
> "brew install watchman"

###### install react-native-cli
> "npm install -g react-native-cli"

#### Android-react-native set up
(First Time setup only)
>## if you are setting up for iOS go to [iOS Setup](#ios-react-native-set-up)

###### 1. Andorid studio
>Android Studio requires the Java SE Development Kit(JDK), version 8. 
>> to download go here (JDK)[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html]

>Download [Android Studio](https://developer.android.com/studio/install.html)
>Install the AVD and HAXM 

>Choose Custom installation when running Android Studio for the first time. Make sure the boxes next to all of the following are checked:

>Android SDK
>Android SDK Platform
>Performance (Intel ® HAXM)
>Android Virtual Device
>Then, click "Next" to install all of these components.

> now press Configure > SDK Manager
> 

###### 2. brew install android-sdk
> In your terminal type
> "brew install android-sdk"


###### 3. Andorid JDK
> In your terminal type
> "javac -version"
>	if you get 1.8.x_xxx

###### 4. Setting up your Virtual Device
> download [virtualbox](https://www.virtualbox.org/wiki/Downloads)

###### 5. Genemotion set up 
> 1. online sign up *remember this login because you will need it to use genymotion*
>> 1. got to [genemotion](https://www.genymotion.com/account/login/) sign up register and download/Install
> 2. open genemotion and add the device of your choice
> 3. go into "setting > ADB" in the Android SDK enter "/usr/local/Cellar/android-sdk/24.4.1_.1"

###### 6. Set up the ANDROID_HOME environment variable
> In your terminal type
> "sudo vim ~/.bashrc"
>> press i to enter INSERT mode and enter the following
>> "export ANDROID_HOME=~/Library/Android/sdk
>> export PATH=${PATH}:${ANDROID_HOME}/tools
>> export PATH=${PATH}:${ANDROID_HOME}/platform-tools"


#### iOS-react-native-set-up

###### 1. Install xcode