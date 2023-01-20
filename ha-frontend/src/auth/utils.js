import {createContext, useContext} from "react";
import {ACCESS_TOKEN, Config} from "../constants";
import axios from "axios";


const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const authorize =  () => {
        axios.get(`https://${Config.domain}/authorize`, {
            params: {
                response_type: 'code',
                audience: Config.audience,
                client_id: Config.clientID,
                redirect_uri: Config.redirect_uri,
                scope: 'openid'
            }
        }).then(response => {
            console.log(response.data);
        }).catch(error => console.error(error));
    }
    const signin = (token, f) => {
        var options = {
            method: 'POST',
            url: `https://${Config.domain}/oauth/token`,
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            data: new URLSearchParams({
                grant_type: 'authorization_code',
                client_id: Config.clientID,
                client_secret: Config.secret,
                code: token,
                redirect_uri: Config.redirect_uri,
            })
        };

        axios.request(options).then(response => {
            console.log(response.data);
            localStorage.setItem(ACCESS_TOKEN, response.data.access_token)
            f()
        }).catch(error => console.error(error));
    }

    const signout = (f) => {
        console.log("signed_out")
        localStorage.removeItem(ACCESS_TOKEN)
        f()
    }

    const value = {signin, signout, authorize}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}