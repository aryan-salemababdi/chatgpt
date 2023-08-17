import { ReactNode } from "react";
import { NextPage } from "next";
import { Col,
         Divider,
         Row,
         Typography
        } from "antd";
import Link from "next/link";
import SignupAuth from "../../atom/SignupAuth/SignupAuth";

interface SignupTypes {
  items: Array<{
    id: number;
    icon: ReactNode;
  }>;
}

const { Title } = Typography;

const SignupPage: NextPage<SignupTypes> = ({ items }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Col span={24} style={{ textAlign: "center", marginTop: "20px" }}>
        {items[0].icon}
      </Col>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Row justify="center" align="middle">
            <Col span={24} style={{ textAlign: "center" }}>
              <Title level={3}>Create your account</Title>
              <Title level={5} style={{ margin: "0" }}>
                Note that phone verification may be required for signup.
              </Title>
              <Title level={5} style={{ margin: "0" }}>
                Your number will only be used to verify your identity for
                security purposes.
              </Title>
              <br />
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <Row justify="center" align="middle">
                <Col>
                  <SignupAuth />
                </Col>
              </Row>
              <Col>
                <Title level={5}>
                  Already have an account? <Link href="/login">Login</Link>
                </Title>
              </Col>
            </Col>
            <Col span={7}></Col>
            <Col
              span={10}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Divider style={{ borderTop:"1px"}}>Or</Divider>
            </Col>
            <Col span={7}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default SignupPage;
