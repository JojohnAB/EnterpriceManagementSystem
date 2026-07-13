import { useNavigate } from "react-router-dom"

function Login() {
    const router=useNavigate()
    const loginFun=()=>{
        localStorage.setItem('access_token', '12345')
        router('/')
    }
    return (
        <>
            <h1>Welcome to Login Page</h1>
            <button className="btn btn-success" onClick={()=>loginFun()}>Click to login</button>
        </>

    )

}
export default Login