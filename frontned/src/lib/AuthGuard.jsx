import { Outlet } from "react-router"
import { Forbiddern } from "../pages/Forbidden";
import { AuthContext } from "./AuthContext.jsx";
import api from "./axios.js";
import { useEffect, useState } from "react";



export default function AuthGuard() {

  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)    
            const response = await api.get('/user')
            if (response) 
                setUser(response.data)
            setLoading(false)
        }
        fetchUser()
    }, [])

    if (loading) return <p>loading</p>

    return( 
        <AuthContext value={null}>
            {user? <Outlet /> : <Forbiddern />}
        </AuthContext>
    )
}