import React, {useEffect} from 'react';
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom'
import {useAuth} from "./utils";

const RedirectHandler = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()

    const from = location.state?.from?.pathname || "/"

    const [searchParams] = useSearchParams()

    useEffect(() => {
        const token = searchParams.get("code")
        const error = searchParams.get("error")
        if (token) {
            console.log(token)
            auth.signin(token, () => {
                navigate("/home", {replace: true, state: {from: from}})
            })
        } else {
            console.log(error)
            navigate("/", {replace: true, state: {from: from}})
        }
    }, [])

    return (
        <></>
    );
};

export default RedirectHandler;