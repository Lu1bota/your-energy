import Link from "next/link";
import Container from "../Container/Container";
import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.container}>
          <Link href="/" className={css.logo} aria-label="Go to homepage">
            <svg width={132} height={24} className={css.logoIcon}>
              <use href="/sprite.svg#logo"></use>
            </svg>
          </Link>

          <Navigation />

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

          <button type="button" className={css.burger}>
            <svg width={32} height={32}>
              <use href="/sprite.svg#burger"></use>
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
