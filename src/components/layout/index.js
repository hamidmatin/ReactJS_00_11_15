import React from "react";
import { Footer } from "../footer";
import { Header } from "../header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ width: "80%", margin: "auto" }}>{children}</div>
      <Footer />
    </div>
  );
};
