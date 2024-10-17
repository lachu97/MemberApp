/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import store from './AppModules/Redux/store';
import HomeScreen from './AppModules/Views/HomeScreen';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex:1}}>
      <Provider store={store}>
        <HomeScreen/>
      </Provider>
    </SafeAreaView>
  );
}
export default App;
