import { Outlet } from "react-router"
import { Forbiddern } from "../pages/Forbidden";
import { AuthContext } from "./AuthContext.jsx";



export default function AuthGuard({ user }) {

    return (
        <AuthContext value={user}>
            {user ? <Outlet /> : <Forbiddern />}
        </AuthContext>
    )
}