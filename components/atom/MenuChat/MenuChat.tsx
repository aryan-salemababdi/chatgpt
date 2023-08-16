import { Button } from "antd";
import style from "./MenuChat.module.css";
const MenuChat = () => {
  return (
    <div className={style.menu}>
      <Button type="text" className={style.menuButton} style={{marginTop:"10px"}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{color:"#fff"}}>Design a database schema</span>
          <span style={{color:"#fff", opacity:0.5}}>for a customer loyalty program in a small...</span>
        </div>
      </Button>
      <Button type="text" className={style.menuButton} style={{marginTop:"10px"}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{color:"#fff"}}>Help me debug</span>
          <span style={{color:"#fff", opacity:0.5}}>a linked list problem</span>
        </div>
      </Button>
      <Button type="text" className={style.menuButton} style={{marginTop:"10px"}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{color:"#fff"}}>Recommend a dish</span>
          <span style={{color:"#fff", opacity:0.5}}>to bring to a potluck</span>
        </div>
      </Button>
      <Button type="text" className={style.menuButton} style={{marginTop:"10px"}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{color:"#fff"}}>Give me ideas</span>
          <span style={{color:"#fff", opacity:0.5}}>for what to do with my kids art</span>
        </div>
      </Button>
    </div>
  );
};

export default MenuChat;
