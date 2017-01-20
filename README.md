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
4. [App Registry](#appregistry)
5. [Making Basic Elements](#elements)

# Resources
>* [AppRegistry](https://facebook.github.io/react-native/docs/appregistry.html)
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


`$ npm install` 

For iOS:

```
$ react-native run-ios
```
For Android:
```
$ react-native run-android
```

If you get an error while building that says "something" you need to follow the following steps:

- cd into your folder AwsomeProject and run the following in your terminal:

```
cd android
touch local.properties
cd ..
```

- open up the local.properties file and copy & paste `sdk.dir = /usr/local/Cellar/android-sdk/24.4.1_1`

- cd back into AwsomeProject and run `react-native run-android`

##AppRegistry
AppRegistry is much like `reactDOM.render()` but AppRegistry looks like this:
`AppRegistry.registerComponent('WHAT YOU NAMED YOUR PROJECT', () => ReactComponent);`

## Elements
##### `<div\> = < View \>`
They work the same in both web and React-Native 

##### `<p\> =  < Text \>`
They work the same in both web and React-Native

##### `<img\> =  < Image \>`
Image tags In react native take a few properties today we will be working with source and style

##### Network Image

```
<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 400, height: 400}} /\>
```

Unlike with static resources, you will need to manually specify the dimensions of your image.

#####Static resource

```
<Image source={require('./my-icon.png')} /\>
```

Image tags can only accept `.png` images

##### `background image= <Image\> </Image\>`
Background Images work just like an Image tag but are just not self closing any elements between them will display on top of your picture.

##### `<input\> = <TextInput/\>`

##### `<ul\> = <ListView/\>`
This is a little more difficult than most becuase this does not work like your normal `<ul\> `we will get back to this after we cover state.


