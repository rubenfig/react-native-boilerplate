import {createAppContainer, createStackNavigator} from "react-navigation";
import LoginScreen from "../Screens/Login";
const AppNavigator = createStackNavigator({
    Login: LoginScreen
});

export default createAppContainer(AppNavigator);