"use client";
import { useEffect, useState } from "react";
import * as S from "../../style.ts/components/menu/style";

type MenuType = {
  selected: "contact" | "home" | "portfolio";
};
export default function FrameWinner({ selected }: MenuType) {
  const documentContainer = document.getElementById("container");

  function goPage(page: number) {
    if (!documentContainer) return;
    const scrollAmounts = {
      contact: [0, 1502, 3004],
      home: [-1502, 0, 1502],
      portfolio: [-3004, -1502, 0],
    };
    const scrollByAmount = scrollAmounts[selected][page - 1];
    documentContainer.scrollBy({ left: scrollByAmount });
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
