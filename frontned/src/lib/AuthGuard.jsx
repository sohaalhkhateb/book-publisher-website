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

    if (loading) return
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        width: 'max-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100vh'
    }}>
        <p
            style={{
                color: 'var(--warning)',
                fontSize: 'font-size: clamp(30px, 4vw, 25px)',
                fontWeight: 'bold',
                width: 'max-content',
                borderBottom: '3px solid var(--error)',
            }}
        >loading</p>
    </div>

    return (
        <AuthContext value={null}>
            {user ? <Outlet /> : <Forbiddern />}
        </AuthContext>
    )
}