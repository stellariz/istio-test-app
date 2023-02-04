import {useEffect, useState} from "react";
import axios from "axios";
import {ACCESS_TOKEN, Config} from "../constants";

const PermissionsPage = () => {
    const [permissions, setPermissions] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    useEffect(() => {
        axios.get(`${Config.baseURL}/api/details/permissions`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }}).then(res => {
                setPermissions(res.data)
            }).catch(err => {
                setErrorMessage(err.response.data)
            })}, [])

    return (
        <div>
            {errorMessage}
            {permissions}
        </div>
    )
}

export default PermissionsPage;