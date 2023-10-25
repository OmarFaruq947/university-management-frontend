import React from "react";
import UMBreadCrumb from "./UMBreadcrumb";

type ActionBarProps = {
  title?: string;
  children: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <h1>{title}</h1>
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

export default ActionBar;
