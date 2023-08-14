import { Col,
        Row,
        Typography,
        Button,
        Space 
} from "antd";
import ChatgptIcon from "../Icons/ChatgptIcon";

const { Title } = Typography;

const Welcome = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ChatgptIcon />
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title level={5} style={{ color: "#fff" }}>
            Welcome to ChatGPT
          </Title>
        </Col>
        <Col
          span={24}
          style={{ textAlign: "center", margin: "-20px 0px 0px 0px" }}
        >
          <Title level={5} style={{ color: "#fff" }}>
            Log in with your OpenAI account to continue
          </Title>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Space wrap>
            <Button
              style={{
                background: "#10A37F",
                borderColor: "#10A37F",
                color: "#fff",
              }}
            >
              Login
            </Button>
            <Button
              style={{
                background: "#10A37F",
                borderColor: "#10A37F",
                color: "#fff",
              }}
            >
              Sign up
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
