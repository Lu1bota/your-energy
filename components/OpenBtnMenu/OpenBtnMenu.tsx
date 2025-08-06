"use client";

import { useGlobalState } from "@/lib/store/store";
import css from "./OpenBtnMenu.module.css";

export default function OpenBtnMenu() {
  const openMenu = useGlobalState((state) => state.openMenu);

  return (
    <button
      type="button"
      className={css.burger}
      aria-label="Open mobile menu"
      onClick={openMenu}
    >
      <svg width={32} height={32}>
        <use href="/sprite.svg#burger"></use>
      </svg>
    </button>
  );
}
