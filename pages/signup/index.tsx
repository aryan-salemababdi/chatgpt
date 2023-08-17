import SignupPage from "../../components/Molecule/SignupPage/SignupPage";
import ChatgptIcon from "../../components/atom/Icons/ChatgptIcon";

const Signup = () => {
  return (
    <div style={{height:"100vh"}}>
        <SignupPage
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

export default Signup;