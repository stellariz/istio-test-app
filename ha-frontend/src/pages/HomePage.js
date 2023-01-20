import {useEffect, useState} from "react";
import {ACCESS_TOKEN, Config} from "../constants";
import axios from "axios";

const HomePage = () => {
    const [message, setMessage] = useState("")
    useEffect(()=>{
        axios.get(`${Config.baseURL}/hello/greeting`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            }
        }).then(res => setMessage(res.data))},[])

    return (
        <div>
            {message}
        </div>
    )
}

export default HomePage