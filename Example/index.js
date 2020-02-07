/**
 * @format
 */

import {AppRegistry} from 'react-native';

/*
*  At moment only works example form App2
*/

// import App from './App';
// import App from './App1';
import App from './App2';
// import App from './App3';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
