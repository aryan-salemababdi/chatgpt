import { Col,
        Row,
        Typography,
        Button,
        Space 
} from "antd";
import ChatgptIcon from "../Icons/ChatgptIcon";
import { useRouter } from "next/router";

const { Title } = Typography;

const Auth = () => {
    const router = useRouter();
    const handller = (input:string) => {
        router.push(`/${input}`);
    };
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
          <Title level={3} style={{ color: "#fff" }}>
            Welcome to ChatGPT
          </Title>
        </Col>
        <Col
          span={24}
          style={{ textAlign: "center", margin: "-20px 0px 0px 0px" }}
        >
          <Title level={3} style={{ color: "#fff" }}>
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
              onClick={()=>handller("login")}
            >
              Login
            </Button>
            <Button
              style={{
                background: "#10A37F",
                borderColor: "#10A37F",
                color: "#fff",
              }}
              onClick={()=>handller("signup")}
            >
              Sign up
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
