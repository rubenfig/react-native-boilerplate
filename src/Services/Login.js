import {Api} from "../Config/Api";

const login = params => {

    return Api.post(
        '/login',
        {
            "email": params.username,
            "password": params.password
        }
    );
};

export default { login };