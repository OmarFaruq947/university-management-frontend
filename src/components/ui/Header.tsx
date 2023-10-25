"use client";

import { authKey } from "@/constrants/storageKey";
import { removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;
const Header = () => {
  // navigation
  const router = useRouter();
  // logout function
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  // logout avatar
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger onClick={logOut}>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader style={{ backgroundColor: "#eee" }}>
      <Row justify={"end"} align={"middle"} style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
