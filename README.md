<h3 align="center">
  rn-falcon-app-intro
</h3>

<p align="center">
  <a href="https://facebook.github.io/react-native/">React Native</a> component <br/>
  Implementing a parallax effect welcome page using base on <a href="https://github.com/leecade/react-native-swiper">react-native-swiper</a>, similar to the one found in Google's app like Sheet, Drive, Docs...<br/>
  This component is based on this no longer followed frequently: <a href="https://github.com/FuYaoDe/react-native-app-intro">react-native-app-intro</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rn-falcon-app-intro"><img src="https://img.shields.io/npm/v/rn-falcon-app-intro.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/rn-falcon-app-intro"><img src="https://img.shields.io/npm/dm/rn-falcon-app-intro.svg?style=flat-square"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>
<br />

# Table of Content

1. [Example](#example)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Properties](#properties)
5. [Contributing](#contributing)
<!-- 3. [Basic Usage](#basic-usage) -->

# Example

[Example code](https://github.com/Richi2293/rn-falcon-app-intro/tree/master/Example)

### Support ios and android
<img src="http://i.giphy.com/3o6ozjLoOnYTXfzJgQ.gif">

### Installation

For React Native <=60
```bash
$ npm i rn-falcon-app-intro@1.2.3 --save
```
For React Native >=60
```bash
$ npm i rn-falcon-app-intro --save
```

<!-- 
### Basic Usage

You can use pageArray quick generation your app intro with parallax effect. With the basic usage, the Android status bar will be updated to match your slide background color.

<img src="http://i.giphy.com/l3V0khy22aUviTTaM.gif">
<img src="./assets/sample-android.gif" width="280">

```javascript
import React, { Component } from 'react';
import { AppRegistry, Alert } from 'react-native';
import AppIntro from 'rn-falcon-app-intro';

class Example extends Component {
  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    Alert.alert('Done');
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',
      img: 'https://goo.gl/Bnc3XP',
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Page 2',
      description: 'Description 2',
      img: require('../assets/some_image.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}

AppRegistry.registerComponent('Example', () => Example);
```
-->
### Usage

If you need customized page like my Example, you can  pass in `View` component into AppIntro component and set level. Remember any need use parallax effect component, Need to be `<View level={10}></View>` inside.
<br />
**(At the moment the parallax effect doesn't work, maybe in the future it will be fixed)**

<img src="http://i.giphy.com/26AHwds1g5HjXrd4s.gif">

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppIntro from 'rn-falcon-app-intro';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

class Example extends Component {

  render() {
    return (
      <AppIntro>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={10}><Text style={styles.text}>Page 1</Text></View>
          <View level={15}><Text style={styles.text}>Page 1</Text></View>
          <View level={8}><Text style={styles.text}>Page 1</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={-10}><Text style={styles.text}>Page 2</Text></View>
          <View level={5}><Text style={styles.text}>Page 2</Text></View>
          <View level={20}><Text style={styles.text}>Page 2</Text></View>
        </View>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={8}><Text style={styles.text}>Page 3</Text></View>
          <View level={0}><Text style={styles.text}>Page 3</Text></View>
          <View level={-10}><Text style={styles.text}>Page 3</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={5}><Text style={styles.text}>Page 4</Text></View>
          <View level={10}><Text style={styles.text}>Page 4</Text></View>
          <View level={15}><Text style={styles.text}>Page 4</Text></View>
        </View>
      </AppIntro>
    );
  }
}
AppRegistry.registerComponent('Example', () => Example);
```

And in Android, image inside view component, view need width、height.
```javascript
<View style={{
  position: 'absolute',
  top: 80,
  left: 30,
  width: windows.width,
  height: windows.height,
}} level={20}
>
  <Image style={{ width: 115, height: 70 }} source={require('./img/1/c2.png')} />
</View>
```

## **Properties**
| Prop           | PropType | Default Value           | Description                                                                                                                                                                                                                                                                                                                                                      |
|----------------|----------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dotColor       | string   | 'rgba(255,255,255,0.3)' | Bottom of the page dot color                                                                                                                                                                                                                                                                                                                                     |
| activeDotColor | string   | '#fff'                  | Active page index dot color                                                                                                                                                                                                                                                                                                                                      |
| rightTextColor | string   | '#fff'                  | The bottom right Text `Done、>` color                                                                                                                                                                                                                                                                                                                            |
| leftTextColor  | string   | '#fff'                  | The bottom left Text `Skip` color                                                                                                                                                                                                                                                                                                                                |
| onSlideChange  | (index, total) => {} |                         | function to call when the pages change                                                                                                                                                                                                                                                                                                                           |
| onSkipBtnClick | (index) => {}     |                         | function to call when the Skip button click                                                                                                                                                                                                                                                                                                                      |
| onDoneBtnClick | func     |                         | function to call when the Done button click                                                                                                                                                                                                                                                                                                                      |
| onNextBtnClick | (index) => {}     |                         | function to call when the Next '>' button click                                                                                                                                                                                                                                                                                                                  |
| doneBtnLabel   | string、Text element  |  Done                   | The bottom right custom Text label                                                                                                                                                                                                                                                                                                                   |
| skipBtnLabel   | string、Text element  |  Skip                   | The bottom left custom Text label                                                                                                                                                                                                                                                                                                                  |
| nextBtnLabel   | string、Text element   |  ›                      | The bottom left custom Text label                                                                                                                                                                                                                                                                                                                  |
| pageArray (currently not working, don't use it)     | array    |                         | In the basic usage, you can input object array to render basic view example: ```[[{title: 'Page 1', description: 'Description 1', img: 'https://goo.gl/uwzs0C', imgStyle: {height: 80 * 2.5, width: 109 * 2.5 }, backgroundColor: '#fa931d', fontColor: '#fff', level: 10 }]``` , level is parallax effect level ,if you use pageArray you can't use custom view |
| defaultIndex | number   | 0 | number of the index of the initial index |
| showSkipButton | bool | true | a boolean defining if we should render the skip button |
| showDoneButton | bool | true | a boolean that defines if we should render the done button |
| showDots | bool | true | a boolean that defines if we should render the bottom dots |
| scrollEnabled | bool | true | a boolean that defines if swiping is enabled or disabled |
| width | number | default width of the device | a number that defines the width of the view swiper |
| height | number | default height of the device | a number that defines the height of the view swiper |
| flexContainer | number | 1 | a number that defines the flex value of the view swiper |

##### **Children View Properties**
| Prop  | PropType | Default Value | Description           |
|-------|----------|---------------|-----------------------|
| level | number   |               | parallax effect level |

# Contributing

Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.
