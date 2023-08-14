import { ReactNode, useState } from "react";
import { NextPage } from "next";
import { Col, Row, Typography } from "antd";
import LoginAuth from "../../atom/LoginAuth/LoginAuth";
import Link from "next/link";

interface LoginTypes {
  items: Array<{
    id: number;
    icon: ReactNode;
  }>;
}

const { Title } = Typography;

const LoginPage: NextPage<LoginTypes> = ({ items }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Col span={24} style={{ textAlign: "center", marginTop: "20px" }}>
        {items[0].icon}
      </Col>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Row justify="center" align="middle">
            <Col span={24} style={{ textAlign: "center" }}>
              <Title level={3}>Welcome Back</Title>
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <Row justify="center" align="middle">
                <Col>
                  <LoginAuth />
                </Col>
              </Row>
              <Col>
                <Title level={5}>
                  Dont have an account? <Link href="/signup">Sign up here</Link>
                </Title>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default LoginPage;
