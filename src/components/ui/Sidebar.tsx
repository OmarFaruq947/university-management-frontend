"use client";

import { SidebarItems } from "@/constrants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { Layout, Menu } from "antd";
import { useState } from "react";

const Sidebar = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  // user role
  // const role = USER_ROLE.SUPER_ADMIN;
  const { role } = getUserInfo() as any;
  console.log("role------>", role);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        className="demo-logo-vertical"
        style={{
          color: "wheat",
          fontSize: "1.5rem",
          textAlign: "center",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        BAUET
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
