import style from "./Input.module.css";
import { Input } from "antd";

const { TextArea } = Input;

const InputChat = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "10px 0px" }}
    >
      <TextArea
        className={style.Input}
        rows={2}
        placeholder="Send a message"
      />
    </div>
  );
};

export default InputChat;
