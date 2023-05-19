"use client";
import { useEffect } from "react";
import Image from "next/image";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Container, SectionTest } from "./pages/style.ts/style";
import ScrollContainer from "./pages/components/scrollContainer/scrollContainer";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    /* Outros estilos para o body */
  }
`;
export default function Home() {
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
      <Container id="container">
        <SectionTest bg="linear-gradient(29.42deg, #050505 9.39%, #111315 101.2%);">
          <Contact />
        </SectionTest>
        <SectionTest>
          <About />
        </SectionTest>
        <SectionTest>
          <Portfolio />
        </SectionTest>
      </Container>
    </>
  );
}
