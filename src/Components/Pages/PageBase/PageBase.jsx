import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Container from "../../Layout/Container";
import NavBar from "../../Layout/NavBar";
import Footer from "../../Layout/Footer";

const PageBase = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
};

export default PageBase;
