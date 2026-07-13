import { Navigate, Outlet } from "react-router-dom";

function AuthGuard(){
    const status= !! localStorage.getItem('access_token')
    return(
        <>
        { status ? <Outlet/> : <Navigate to="login" /> }
        
        
        </>
    )
}
export default AuthGuard