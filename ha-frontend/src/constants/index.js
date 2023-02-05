export const ACCESS_TOKEN = 'access_token';

export const Config = {
    baseURL: 'http://localhost',
    redirect_uri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE
}