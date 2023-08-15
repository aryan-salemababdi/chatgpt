import ChatPage from "../../components/Molecule/ChatPage/ChatPage";
import style from "../../styles/Home.module.css";

const Chat = () => {
  return (
    <div className={style.container} style={{height:"100vh",width:"100%"}}>
        
        <ChatPage />

    </div>
  )
}

export default Chat;