"use client";
import { useEffect } from "react";
import Image from "next/image";
import About from "./pages/desktop/about";
import Contact from "./pages/desktop/contact";
import Portfolio from "./pages/desktop/portfolio";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import {
  Container,
  ContainerMobile,
  SectionTest,
  ContainerRotate,
} from "./pages/style.ts/style";
import UseWindowSize from "./utils/useWindowSize";
import AboutMobile from "./pages/mobile/about";
import ContactMobile from "./pages/mobile/contact";
import PortfolioMobile from "./pages/mobile/portfolio";
import MenuMobile from "./pages/components/menuMobile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    /* Outros estilos para o body */
  }
`;
export default function Home() {
  const { width } = UseWindowSize();
  const [enterRegionMouse, setEnterRegionMouse] = useState<boolean>();
  const [passOneTime, setPassOneTime] = useState<boolean>();
  useEffect(() => {
    const documentContainer = document.getElementById("container");
    const documentContainerImage = document.getElementById("containerImage");

    if (documentContainer && documentContainerImage) {
      documentContainer.scrollBy({
        left: 1,
      });

      documentContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        documentContainer.scrollBy({
          left: !enterRegionMouse ? (event.deltaY < 0 ? -1 : 1) : 0,
          top: 0,
        });
      });

      documentContainerImage.addEventListener("wheel", (event) => {
        event.preventDefault();
        documentContainerImage.scrollBy({
          left: 0,
          top:
            event.deltaY < 0 ? (!passOneTime ? -20 : 0) : !passOneTime ? 20 : 0,
        });
      });
      setPassOneTime(true);
    }
  }, [width, enterRegionMouse]);

  const scrollDocumentContainer = (event: WheelEvent): void => {
    event.preventDefault();
    const documentContainer = document.getElementById("container");
    if (documentContainer) {
      documentContainer.scrollBy({
        left: event.deltaY < 0 ? -1 : 1,
      });
    }
  };

  function EnterRegion() {
    setEnterRegionMouse(true);
  }
  function LeaveRegion() {
    setEnterRegionMouse(false);
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}

      <GlobalStyle />
      {width > 1024 ? (
        <Container id="container">
          <SectionTest bg="linear-gradient(29.42deg, #050505 9.39%, #111315 101.2%);">
            <Contact />
          </SectionTest>
          <SectionTest>
            <About />
          </SectionTest>
          <SectionTest bg="linear-gradient(211.16deg, #111315 -1.36%, #050505 91.55%);">
            <Portfolio
              onFocusLeavePortfolio={LeaveRegion}
              onFocusEnterPortfolio={EnterRegion}
            />
          </SectionTest>
        </Container>
      ) : (
        <>
          <ContainerMobile>
            <AboutMobile />
            <PortfolioMobile />
            <ContactMobile />
            <MenuMobile />
          </ContainerMobile>
        </>
      )}
      <ToastContainer />
    </>
  );
}
