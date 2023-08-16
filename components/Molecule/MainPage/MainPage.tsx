import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import style from "./ChatPage.module.css";
import MenuIcon from "../../atom/Icons/MenuIcon";
import HamburgerMenu from "../../atom/Icons/HamburgerMenu";
import Plus from "../../atom/Icons/Plus";
import MenuChat from "../../atom/MenuChat/MenuChat";
import InputChat from "../../atom/InputChat/InputChat";
import Sidebar from "../../atom/Sidebar/Sidebar";

const { Title } = Typography;

const MainPage = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [select, setSelect] = useState<string>("GPT3.5");
  return (
    <div>
      <Row>
        <Col xs={24} sm={24}>
          {!openMenu ? (
            <Col md={2} sm={24} xs={24} className={style.navBar}>
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
                  onClick={() => alert("Create New Chat and push to ChatPage")}
                  block
                >
                  <Plus />
                </Button>
              </Col>
            </Col>
          ) : (
            <Sidebar
              open={(open) => {
                setOpenMenu(open);
              }}
            />
          )}
        </Col>
        <Col xs={24} sm={24} md={24}>
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
                      marginTop: "60px",
                      width:"250px",
                      textAlign:"center"
                    }}
                  >
                    <Button
                      style={{
                        color: "#fff",
                        background: select === "GPT3.5" ? "#40414f" : "none",
                        borderColor:select === "GPT3.5" ? "#40414f" : "#202123",
                        width:"120px",
                      }}
                      onClick={() => {
                        setSelect("GPT3.5");
                      }}
                    >
                      GPT3.5
                    </Button>
                    <Button
                      type="text"
                      style={{
                        color: "#fff",
                        background: select === "GPT4" ? "#40414f" : "none",
                        borderColor: select === "GPT4" ? "#40414f" : "#202123",
                        width:"120px",
                      }}
                      onClick={() => {
                        setSelect("GPT4");
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
        <Col span={4}></Col>
        <Col span={16} style={{ marginTop: "420px" }}>
          <MenuChat />
          <Divider orientation="center"></Divider>
          <InputChat />
          <p style={{ textAlign: "center" }}>
            &copy;Free Research Preview. ChatGPT may produce inaccurate
            information about people, places, or facts. ChatGPT August 3 Version
          </p>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
};
export default MainPage;
