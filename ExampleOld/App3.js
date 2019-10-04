/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// advanced example 2

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

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

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
      <View style={{flex: 1, alignItems: 'center'}}>
        <AppIntro
          onSkipBtnClick={() => console.warn("skip click")}
          // width={300}
          // height={300}
          // flexContainer={null}
          scrollEnabled={false}
          onDoneBtnClick={() => console.warn("done click")}>
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
      </View>
    );
  }
};