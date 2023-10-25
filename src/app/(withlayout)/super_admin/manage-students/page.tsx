"use client";

import UMBreadCrumb from "@/components/ui/UMBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `${role}`,
          },
        ]}
      />
      <hr />
      <h1>manage-students</h1>
      <Link href={"/super_admin/manage-students/create"}>
        <Button>Create student</Button>
      </Link>
    </div>
  );
};

export default ManageStudentPage;
