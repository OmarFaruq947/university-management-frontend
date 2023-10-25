"use client";

import UMBreadCrumb from "@/components/ui/UMBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
const DepartmentPage = () => {
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
      <h1>Department List</h1>
      <Link href={"/super_admin/department/create"}>
        <Button>Create</Button>
      </Link>
    </>
  );
};

export default DepartmentPage;
