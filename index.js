/**
 * @format
 */

import {AppRegistry} from "react-native";
import Root from "./src/Root";
if(__DEV__) {
    import('./src/Config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
AppRegistry.registerComponent('cbMobile', () => Root);