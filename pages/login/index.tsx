import LoginPage from "../../components/Molecule/Login/LoginPage";
import ChatgptIcon from "../../components/atom/Icons/ChatgptIcon";

const Login = () => {
  return (
    <div style={{height:"100vh"}}>
        <LoginPage
        items = {[
            {
                id:0,
                icon: <ChatgptIcon />
            }
        ]}
        />
    </div>
  )
}

export default Login;