import React, { useEffect } from "react";

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  const handleScroll = (evt: WheelEvent) => {
    evt.preventDefault();
    const scrollContainer = document.querySelector("main");
    if (scrollContainer) {
      scrollContainer.scrollLeft += evt.deltaY;
    }
  };

  useEffect(() => {
    const scrollContainer = document.querySelector("main");
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return <>{children}</>;
};

export default ScrollContainer;
