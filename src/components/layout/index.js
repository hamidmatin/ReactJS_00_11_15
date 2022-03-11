import React from "react";
import { Footer } from "../footer";
import { Header } from "../header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container" style={{padding: '50px 0'}}>{children}</div>
      <Footer />
    </div>
  );
};
