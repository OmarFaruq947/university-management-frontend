import Login from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAUET / Login",
};

console.log("meta data----->>>>", metadata);

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
