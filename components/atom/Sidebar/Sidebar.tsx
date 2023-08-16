import { NextPage } from "next";
import { Button, Col } from "antd";
import style from "./Sidebar.module.css";
import Plus from "../Icons/Plus";
import MenuIcon from "../Icons/MenuIcon";



interface Sidebar {
    open: (open:boolean) => void;
}


const Sidebar:NextPage<Sidebar> = ({open}) => {
  return (
    <>
      <Col
              md={21}
              sm={12}
              xs={16}
              className={style.sidebar}
            >
              <Button
                style={{
                  color: "#fff",
                  borderColor: "#10A37F",
                  background: "none",
                  margin: "10px",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                }}
                block
              >
                <Plus />
                NewChat
              </Button>
              <Button
                style={{
                  color: "#fff",
                  background: "#343541",
                  borderColor: "#343541",
                  margin: "12px",
                }}
                onClick={() => open(false)}
              >
                <MenuIcon />
              </Button>
            </Col>
    </>
  )
}

export default Sidebar;