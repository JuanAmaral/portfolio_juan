"use client";
import { useEffect } from "react";
import Image from "next/image";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import React, { useState } from "react";

import { Container, SectionTest } from "./pages/style.ts/style";
import ScrollContainer from "./pages/components/scrollContainer/scrollContainer";

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
    <Container id="container">
      <SectionTest>
        <Contact />
      </SectionTest>
      <SectionTest>
        <About />
      </SectionTest>
      <SectionTest>
        <Portfolio />
      </SectionTest>
    </Container>
  );
}
