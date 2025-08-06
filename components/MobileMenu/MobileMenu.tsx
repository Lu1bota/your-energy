"use client";

import Link from "next/link";
import css from "./MobileMenu.module.css";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useGlobalState } from "@/lib/store/store";

export default function MobileMenu() {
  const [mounted, setMounted] = useState(false);
  const closeMenu = useGlobalState((state) => state.closeMenu);
  const isOpenMenu = useGlobalState((state) => state.isOpenMenu);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={
        isOpenMenu ? `${css.overlay} ${css.active}` : `${css.overlay} `
      }
    >
      <div className={css.menu}>
        <button
          type="button"
          aria-label="Close menu"
          className={css.button}
          onClick={closeMenu}
        >
          <svg width={32} height={32} className={css.icon}>
            <use href="/sprite.svg#close"></use>
          </svg>
        </button>

        <ul className={css.navList}>
          <li className={css.item}>
            <Link href="/" className={css.pageLink}>
              Home
            </Link>
          </li>
          <li className={css.item}>
            <Link href="/" className={css.pageLink}>
              Favorites
            </Link>
          </li>
        </ul>

        <ul className={css.networkList}>
          <li>
            <Link
              href="https://www.facebook.com/goITclub/"
              className={css.networkLink}
              target="_blank"
              aria-label="Facebook page"
            >
              <svg width={28} height={28} className={css.networkIcon}>
                <use href="/sprite.svg#facebook"></use>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/goitclub/"
              className={css.networkLink}
              target="_blank"
              aria-label="Instagram page"
            >
              <svg width={28} height={28} className={css.networkIcon}>
                <use href="/sprite.svg#instagram"></use>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/c/GoIT"
              className={css.networkLink}
              target="_blank"
              aria-label="YouTube channel"
            >
              <svg width={28} height={28} className={css.networkIcon}>
                <use href="/sprite.svg#youtube"></use>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>,
    document.body
  );
}
