/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// basic example with the use of pageArray

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Dimensions
} from 'react-native';

import AppIntro from 'rn-falcon-app-intro';
// import AppIntro from './AppIntro';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 75 * 2,
    height: 63 * 2,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    flex: 0.5,
    alignItems: 'center',
    padding: 40
  },
  title: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 20,
  },
});

type Props = {};

export default class App extends Component < Props > {

  onSkipBtnHandle = (index) => {
    // Alert.alert('Skip');
    // console.warn(index);
  }
  doneBtnHandle = () => {
    // Alert.warn('Done');
  }
  nextBtnHandle = (index) => {
    // Alert.alert('Next');
    // console.warn(index);
  }
  onSlideChangeHandle = (index, total) => {
    // console.warn(index, total);
  }

  render() {
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',
      img: require('./img/1/c1.png'),
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
      img: require('./img/1/c1.png'),
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <View style={{flex: 1}}>
        <AppIntro
          onSkipBtnClick={() => console.warn("skip click")}
          onDoneBtnClick={() => console.warn("done click")}
          pageArray={pageArray}>
        </AppIntro>
      </View>
    );
  }
};