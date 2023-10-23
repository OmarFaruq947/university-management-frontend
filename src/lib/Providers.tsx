"use client";

import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;

// this is a HOC
// 2 lear 1) Redux layer  ---> Provider (HOC)
//2) Ant design layer --> StyledComponentsRegistry (HOC)
