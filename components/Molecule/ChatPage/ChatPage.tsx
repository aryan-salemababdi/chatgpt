import { Button, Col, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import style from "./ChatPage.module.css";
import MenuIcon from "../../atom/Icons/MenuIcon";
import HamburgerMenu from "../../atom/Icons/HamburgerMenu";
import Plus from "../../atom/Icons/Plus";
import MenuChat from "../../atom/MenuChat/MenuChat";

const { Title } = Typography;

const ChatPage = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [select,setSelect] = useState<string>("GPT3.5")

  return (
    <div>
      <Row>
        <Col xs={24} sm={24}>
          {!openMenu ? (
            <Col
              md={2}
              sm={24}
              xs={24}
              className={style.chatPage}
              style={{ position: "sticky", top: 0 }}
            >
              <Col sm={4} xs={4}>
                <Button
                  style={{
                    color: "#fff",
                    width: "50px",
                    padding: "0px 15px",
                  }}
                  className={style.menuButton}
                  type="text"
                  onClick={() => setOpenMenu(!openMenu)}
                  block
                >
                  <span className={style.menuIcon}>
                    <MenuIcon />
                  </span>
                  <span className={style.hamburgerMenu}>
                    <HamburgerMenu />
                  </span>
                </Button>
              </Col>
              <Col md={24} sm={16} xs={16} className={style.title}>
                <Title level={4} style={{ marginTop: "0px", color: "#fff" }}>
                  New Chat
                </Title>
              </Col>
              <Col sm={4} xs={4} className={style.rightMenu}>
                <Button
                  style={{
                    color: "#fff",
                    background: "#343541",
                    borderColor: "#343541",
                    margin: "10px",
                    width: "50px",
                  }}
                  onClick={() => setOpenMenu(!openMenu)}
                  block
                >
                  <Plus />
                </Button>
              </Col>
            </Col>
          ) : (
            <Col
              md={21}
              sm={12}
              xs={16}
              style={{
                background: "#343541",
                display: "flex",
                justifyContent: "space-between",
                height: "100vh",
                width: "300px",
              }}
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
                onClick={() => setOpenMenu(!openMenu)}
              >
                <MenuIcon />
              </Button>
            </Col>
          )}
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          style={{ display: openMenu ? "none" : "" }}
        >
          <Row justify="center">
            <Col xs={24} sm={24} md={24}>
              <Row justify="center">
                <Col
                  xs={24}
                  sm={24}
                  md={23}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "#202123",
                      padding: "5px",
                      borderRadius: "10px",
                      marginTop: "5px",
                    }}
                  >
                    <Button
                      style={{
                        color: "#fff",
                        background: select === "GPT3.5"? "#40414f" : "none",
                        borderColor: select === "GPT3.5"? "#40414f" : "#202123"
                      }}
                      onClick={()=>{
                        setSelect("GPT3.5")
                      }}
                    >
                      GPT3.5
                    </Button>
                    <Button 
                    type="text" 
                    style={{ 
                      color: "#fff",
                      background: select === "GPT4"? "#40414f" : "none",
                      borderColor: select === "GPT4"? "#40414f" : "#202123"
                   }}
                    onClick={()=>{
                      setSelect("GPT4")
                    }}
                    >
                      GPT4
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Title level={2} style={{ textAlign: "center", color: "#d9d9e3" }}>
        ChatGPT
      </Title>
      <Row>
        <MenuChat />
      </Row>
    </div>
  );
};

export default ChatPage;
