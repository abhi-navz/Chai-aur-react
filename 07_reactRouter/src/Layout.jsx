import React from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> // Outlet here is being used in the parent componet Layout to render childrent elements like home,about,contact etc in place out of outlet while keeping the Header and Footer component same.
      <Footer />
    </>
  );
}

export default Layout;
