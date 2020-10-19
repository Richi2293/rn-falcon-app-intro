/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App'; // default React Native project page

// Some examples
// import App from './App1';
import App from './App2';
// import App from './App3';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
