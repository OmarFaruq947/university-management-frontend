"use client";

import ActionBar from "@/components/ui/ActionBar";
// import UMBreadCrumb from "@/components/ui/UMBreadcrumb";
import { Button } from "antd";
import Link from "next/link";
const AdminPage = () => {
  // const { role } = getUserInfo() as any;
  return (
    <>
      {/* <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `${role}`,
          },
        ]}
      /> */}

      <ActionBar title="Admin list">
        <Link href={"/super_admin/admin/create"}>
          <Button>Create Admin</Button>
        </Link>
      </ActionBar>
    </>
  );
};

export default AdminPage;
