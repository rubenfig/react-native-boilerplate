import { create } from 'apisauce';
import Config from "react-native-config";

const Api = create({
    baseURL: Config.API_URL,
    timeout: parseInt(Config.TIMEOUT)
});

if (__DEV__ && console.tron) {
    Api.addMonitor(console.tron.apisauce);
}

export { Api };