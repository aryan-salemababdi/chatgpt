import { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button } from "antd";

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address. Please enter a valid email.")
      .required("Please enter your email."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long.")
      .required("Please enter your password."),
      phone: Yup.string()
      .matches(/^[0-9]+$/, {
        message: "Please enter a valid mobile phone number.",
      })
      .min(5, "Please enter a valid mobile phone number.")
      .required("Please enter your phone number."),
  });
  

const SignupAuth: NextPage = () => {
  const router = useRouter();

  const [showPhone, setShowPhone] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      router.push("/chat");
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
        {!showPhone && (
          <>
            <Form.Item
              name="email"
              validateStatus={formik.errors.email ? "error" : ""}
              help={formik.errors.email}
            >
              <Input {...formik.getFieldProps("email")} placeholder="Email:" />
            </Form.Item>
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
          </>
        )}
        {showPhone && (
          <Form.Item
            name="phone"
            validateStatus={formik.errors.phone ? "error" : ""}
            help={formik.errors.phone}
          >
            <Input
              {...formik.getFieldProps("phone")}
              placeholder="Phone:"
              type="number"
            />
          </Form.Item>
        )}
        <Form.Item>
          <Button
            style={{
              width: 300,
              background: "#10A37F",
              borderColor: "#10A37F",
              color: "#fff",
            }}
            onClick={() => setShowPhone(true)}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupAuth;
