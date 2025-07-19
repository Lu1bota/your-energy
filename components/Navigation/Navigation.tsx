"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.item}>
          <Link href="/" className={`${pathname === "/" ? css.active : ""}`}>
            Home
          </Link>
        </li>
        <li className={css.item}>
          <Link
            href="/"
            className={`${pathname === "/favorites" ? css.active : ""}`}
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
