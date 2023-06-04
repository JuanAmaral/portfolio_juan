"use client";
import { useEffect, useState } from "react";
import * as S from "../../style.ts/components/menuMobile/style";
import { usePathname } from "next/navigation";

type MenuType = {
  selected?: "contact" | "home" | "portfolio";
};
type ScrollAmounts = {
  [key: string]: number[];
};

export default function MenuMobile({ selected }: MenuType) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [selectButton, setSelectButton] = useState<number>(0);
  const handleMenuItemClick = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1000);
  };
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  function goPage(page: string) {
    if (typeof window !== "undefined") {
      const areaElement = document.getElementById(page);
      if (!areaElement) return;
      if (areaElement) {
        areaElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
  const listButton = [
    {
      Name: "home",
      id: 0,
      icon: <S.IconHome />,
    },
    {
      Name: "portfolio",
      id: 1,
      icon: <S.IconFolderOpen />,
    },
    {
      Name: "contact",
      id: 2,
      icon: <S.IconContact />,
    },
    {
      Name: "whatsapp",
      id: 3,
      icon: <S.IconWhatsapp />,
    },
  ];

  function funcButtons(name: string) {
    if (name == "whatsapp") {
      window.open(
        "https://wa.me/5562992911658?text=Hi%2C+I+see+you+portfolio%2C+let%27s+create+something%21%21"
      );
    }

    goPage(name);
  }
  return (
    <S.ContainerMenu>
      <S.Menu>
        {listButton.map((value, index) => (
          <>
            <S.MenuItemBorder
              idButton={value.id}
              selectedButton={selectButton}
              active={active}
              onClick={() => {
                handleMenuItemClick();
                setSelectButton(value.id);
                funcButtons(value.Name);
              }}
            >
              <S.MenuItem isHighlighted={selected == "contact" ? true : false}>
                {value.icon}
              </S.MenuItem>
            </S.MenuItemBorder>
          </>
        ))}
      </S.Menu>
    </S.ContainerMenu>
  );
}
