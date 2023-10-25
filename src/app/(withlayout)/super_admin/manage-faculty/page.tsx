"use client";

import UMBreadCrumb from "@/components/ui/UMBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageFacultyPage = () => {
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
      <h1>manage faculty list</h1>
      <Link href={"/super_admin/manage-faculty/create"}>
        <Button>Create</Button>
      </Link>
    </>
  );
};

export default ManageFacultyPage;
