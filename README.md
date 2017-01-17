# A React Native demo project

# Objective
* Setting up a React Native project
* Ability to create the equivalent of "div, p, img, ul" tags in React Native
* Ability to navigate multiple pages
* Making fetch-js calls

## Table of Contents
1. [Resources](#resources)
2. [React Native Inital Setup](https://github.com/Joshuaf91/react-native-for-android/blob/master/react-native-inital-setup.md#react-native-inital-setup)
	-[Android setup](https://github.com/Joshuaf91/react-native-for-android/blob/master/react-native-inital-setup.md#android-react-native-set-up)
	-[iOS setup](https://github.com/Joshuaf91/react-native-for-android/blob/master/react-native-inital-setup.md#ios-react-native-set-up)
3. [running your project](#to-run)

# Resources
>* [react-native getting started](https://facebook.github.io/react-native/docs/getting-started.html)
>* [View](https://facebook.github.io/react-native/docs/view.html)
>* [Image and background Image](https://facebook.github.io/react-native/docs/image.html)
>* [Text](https://facebook.github.io/react-native/docs/text.html)
>* [TextInput](https://facebook.github.io/react-native/docs/textinput.html)
>* [ListView](https://facebook.github.io/react-native/docs/using-a-listview.html)
>* [Touchablehighlight](https://facebook.github.io/react-native/docs/touchablehighlight.html)
>* [Fetch-JS](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
>* *[Navigator](https://facebook.github.io/react-native/docs/using-navigators.html)




## To run:
$ npm install
for iOS
$ react-native ios
for Android
$ react-native android
>If you get an error while building that says "something" you need to follow the following steps cd into your folder AwsomeProject and run the following in your terminal
	
>"cd android
>touch local.properties
>cd .."

>open up the local.properties file and enter "sdk.dir = /usr/local/Cellar/android-sdk/24.4.1_1"

>cd back into AwsomeProject and run "react-native run-android"