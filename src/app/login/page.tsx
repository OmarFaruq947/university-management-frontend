"use client";
import FormInput from "@/components/Forms/FormInput";
import Form from "@/components/Forms/Forms";
import { LoginOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/Secure login-bro.png";
type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row style={{ minHeight: "100vh" }} justify="center" align="middle">
        <Col sm={12} md={16} lg={10}>
          <Image src={loginImage} width={500} alt="login form...." />
        </Col>

        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0px" }}>First login your account</h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div className="">
                <FormInput name="id" type="text" size="large" label="User id" />
              </div>
              <div className="" style={{ margin: "15px 0px" }}>
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>

              <Button type="primary" htmlType="submit" icon={<LoginOutlined />}>
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
