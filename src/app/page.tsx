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
} from "./pages/style.ts/style";
import UseWindowSize from "./utils/useWindowSize";
import AboutMobile from "./pages/mobile/about";
import ContactMobile from "./pages/mobile/contact";
import PortfolioMobile from "./pages/mobile/portfolio";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    /* Outros estilos para o body */
  }
`;
export default function Home() {
  const { width } = UseWindowSize();
  useEffect(() => {
    const documentContainer = document.getElementById("container");
    if (documentContainer) {
      documentContainer.scrollBy({
        left: 1,
      });
      documentContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        documentContainer.scrollBy({
          left: event.deltaY < 0 ? -1 : 1,
        });
      });
    }
  }, []);

  return (
    <>
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
            <Portfolio />
          </SectionTest>
        </Container>
      ) : (
        <>
          <ContainerMobile>
            <AboutMobile />
            <PortfolioMobile />
          </ContainerMobile>
        </>
      )}
    </>
  );
}
