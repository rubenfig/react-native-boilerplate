import LoginService from '../Services/Login';
import * as apisauce from 'apisauce';


const login = ({ username, password }) => {

    return LoginService.login({
        username,
        password
    }).then(response => {
        console.tron.log(`response: ${JSON.stringify(response)}`);
        let status = {
            ok: true
        };

        switch (response.problem) {
            case apisauce.NONE:
                status.ok = true;
                status.data = response.data;
                break;

            case apisauce.NETWORK_ERROR:
                status.message =
                    'No se pudo conectar a internet. Verifique su conexión.';
                status.ok = false;
                break;

            default:
                status.ok = false;
                status.message = 'No se pudo iniciar sesión. Vuelva a intentarlo';
        }

        return status;
    });
};


export default {
    login
};