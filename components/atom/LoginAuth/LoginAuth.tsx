import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button } from "antd";
import { NextPage } from "next";
import { useRouter } from "next/router";


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address. Please enter a valid email.")
    .required("please enter your email."),
  password: Yup.string()
    .min(8,"Password must be at least 8 characters long.")
    .required("Please enter your password."),
});


const LoginAuth: NextPage = () => {

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      router.push("/chatgpt")
    },
  });


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        name="basic"
        style={{ width: 300 }}
        initialValues={{ remember: true }}
        onFinish={formik.handleSubmit}
        onFinishFailed={formik.handleBlur}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          validateStatus={formik.errors.email ? "error" : ""}
          help={formik.errors.email}
        >
          <Input {...formik.getFieldProps("email")} placeholder="Email:" />
        </Form.Item>
        {formik.touched.email && !formik.errors.email && (
          <Form.Item
            name="password"
            validateStatus={formik.errors.password ? "error" : ""}
            help={formik.errors.password}
          >
            <Input.Password
              {...formik.getFieldProps("password")}
              placeholder="Password:"
            />
          </Form.Item>
        )}
        <Form.Item>
          <Button
            style={{
              width: 300,
              background: "#10A37F",
              borderColor: "#10A37F",
              color:"#fff"
            }}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginAuth;
