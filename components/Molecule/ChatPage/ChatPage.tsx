import { Button, Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import style from "./ChatPage.module.css";
import MenuIcon from "../../atom/Icons/MenuIcon";

const { Title } = Typography;

const ChatPage = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={6}>
          {!openMenu ? (
            <Col
            md={4}
            sm={24}
            xs={24}
              className={style.chatPage}
            >
            <Button
              style={{
                color: "#fff",
                background: "#343541",
                borderColor: "#343541",
                margin: "10px",
                width:"50px"
              }}
              onClick={() => setOpenMenu(!openMenu)}
              block
            >
              <MenuIcon />
            </Button>
            </Col>
          ) : (
            <Col
              md={24} 
              sm={12}
              xs={16}
              style={{
                background: "#343541",
                display: "flex",
                justifyContent: "space-between",
                height:"100vh",
              }}
            >
              <Button
                style={{
                  color: "#fff",
                  borderColor: "#10A37F",
                  background: "none",
                  margin: "10px",
                  width: "200px",
                }}
                block
              >
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
        <Col xs={24} sm={24} md={18}>
          <Row justify="center">
            <Col xs={24} sm={24} md={20}>
              Hello
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ChatPage;
