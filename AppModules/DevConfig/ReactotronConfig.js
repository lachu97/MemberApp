import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppReactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
        name: 'Member App',
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux()) // Redux Support
    .connect(); // let's connect!
export default AppReactotron;
