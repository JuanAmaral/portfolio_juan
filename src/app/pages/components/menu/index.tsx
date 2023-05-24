"use client";
import { useEffect, useState } from "react";
import * as S from "../../style.ts/components/menu/style";
import { usePathname } from "next/navigation";

type MenuType = {
  selected: "contact" | "home" | "portfolio";
};
type ScrollAmounts = {
  [key: string]: number[];
};

export default function FrameWinner({ selected }: MenuType) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  function goPage(page: number) {
    if (typeof window !== "undefined") {
      const documentContainer = document.getElementById("container");
      if (!documentContainer) return;
      const scrollAmounts = {
        contact: [0, 1502, 3004],
        home: [-1502, 0, 1502],
        portfolio: [-3004, -1502, 0],
      };
      const scrollByAmount = scrollAmounts[selected][page - 1];
      documentContainer.scrollBy({ left: scrollByAmount });
    }
  }
  return (
    <S.Menu>
      <S.MenuItem
        isHighlighted={selected == "contact" ? true : false}
        onClick={() => goPage(1)}
      >
        Contact
      </S.MenuItem>
      <S.MenuItem
        isHighlighted={selected == "home" ? true : false}
        onClick={() => goPage(2)}
      >
        Home
      </S.MenuItem>
      <S.MenuItem
        isHighlighted={selected == "portfolio" ? true : false}
        onClick={() => goPage(3)}
      >
        Portfolio
      </S.MenuItem>
    </S.Menu>
  );
}
