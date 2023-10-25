"use client";
import FormInput from "@/components/Forms/FormInput";
import Form from "@/components/Forms/Forms";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { LoginOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/Secure login-bro.png";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  console.log("LoggedIn------>>>", isLoggedIn());
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap(); //ok
      if (res?.accessToken) router.push("/profile"); //ok

      storeUserInfo({ accessToken: res?.accessToken }); //ok
      console.log("res----->", res);
    } catch (error: any) {
      console.error(error.message);
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
                Log in
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
