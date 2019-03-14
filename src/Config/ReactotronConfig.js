import apisaucePlugin from 'reactotron-apisauce';
import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';

// First, set some configuration settings on how to connect to the app
const reactotron = Reactotron.configure({name: 'cbMobile'})
    .use(reduxPlugin())
    .use(apisaucePlugin())
    .use(asyncStorage());

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
    reactotron.connect().clear();
    console.tron = Reactotron;
}
export default reactotron;