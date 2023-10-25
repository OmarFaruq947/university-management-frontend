"use client";

import Contents from "@/components/ui/Contents";
import LoadingPage from "@/components/ui/LoadingPage";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn(); //ok
  const router = useRouter(); //ok
  const [isLoading, setIsLoading] = useState<boolean>(false); //ok

  useEffect(() => {
    if (!userLoggedIn) router.push("/login"); //ok

    setIsLoading(true); //ok
  }, [userLoggedIn, router]);

  if (!isLoading) return <LoadingPage />; //ok

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
