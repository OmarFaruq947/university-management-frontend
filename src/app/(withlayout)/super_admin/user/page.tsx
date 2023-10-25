"use client";

import UMBreadCrumb from "@/components/ui/UMBreadcrumb";
import { getUserInfo } from "@/services/auth.service";
const UserPage = () => {
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
      <h1>user for super admin</h1>
    </>
  );
};

export default UserPage;
