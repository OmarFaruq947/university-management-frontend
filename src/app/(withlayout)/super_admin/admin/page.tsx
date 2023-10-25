"use client";

import UMBreadCrumb from "@/components/ui/UMBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
const AdminPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `${role}`,
          },
        ]}
      />
      <hr />
      <h1>manage-admin</h1>
      <Link href={"/super_admin/admin/create"}>
        <Button>Create Admin</Button>
      </Link>
    </>
  );
};

export default AdminPage;
