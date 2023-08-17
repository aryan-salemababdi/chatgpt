import { NextPage } from "next";
import { Button,
         Col,
         Divider,
         Typography
         } from "antd";
import style from "./Sidebar.module.css";
import Plus from "../Icons/Plus";
import MenuIcon from "../Icons/MenuIcon";
import Delete from "../Icons/Delete";
import Link from "next/link";
import Edit from "../Icons/Edit";

interface Sidebar {
  open: (open: boolean) => void;
}

const { Title } = Typography;

const Sidebar: NextPage<Sidebar> = ({ open }) => {
  return (
    <>
      <Col className={style.sidebar}>
        <Col>
          <Col
            md={23}
            sm={23}
            xs={23}
            style={{ display: "flex", justifyContent: "space-between" }}
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
        </Col>


          {/* {this column need to map!} */}
        <Col>
          <Title
            level={4}
            type="secondary"
            style={{ marginLeft: "11px", color: "#8e8ea0" }}
          >
            Today
          </Title>
          <Col style={{background:"#565869",borderRadius:"5px",marginLeft:"3px"}} md={24} sm={24} xs={24}>
            <Link className={style.buttonSidebar} href="/chat/1">
              <Title level={5} style={{color:"#fff",margin:"0px"}}>
              Lorem ipsum dolor sit
              </Title>
              <Col style={{ display: "flex",margin:"5px" }}>
                <Button type="text" style={{ color: "#fff", width: "1px" }}>
                  <Edit />
                </Button>
                <Button
                  type="text"
                  style={{ color: "#fff", width: "1px" }}
                  onClick={() => alert("delete")}
                >
                  <Delete />
                </Button>
              </Col>
            </Link>
          </Col>
        </Col>

        <Col className={style.bottomSiderbar}>
        <Divider style={{borderTop: "1px solid #fff",opacity:"0.3"}} />
        <Col style={{margin:"0px 20px"}}>
        <Title level={4} type="success">
          this is bottom sidebar
        </Title>
        </Col>
        </Col>

      </Col>
    </>
  );
};

export default Sidebar;
