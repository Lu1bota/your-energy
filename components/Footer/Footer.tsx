import Link from "next/link";
import Container from "../Container/Container";
import css from "./Footer.module.css";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.containerFooter}>
          <div className={css.containerContent}>
            <div>
              <Link href="/" className={css.logo} aria-label="Go to homepage">
                <svg width={132} height={24} className={css.logoIcon}>
                  <use href="/sprite.svg#logo"></use>
                </svg>
              </Link>

              <ul className={css.networkList}>
                <li>
                  <Link
                    href="https://www.facebook.com/goITclub/"
                    target="_blank"
                    aria-label="Facebook page"
                    className={css.networkLink}
                  >
                    <svg width={24} height={24} className={css.networkIcon}>
                      <use href="/sprite.svg#facebook"></use>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/goitclub/"
                    target="_blank"
                    aria-label="Instagram page"
                    className={css.networkLink}
                  >
                    <svg width={24} height={24} className={css.networkIcon}>
                      <use href="/sprite.svg#instagram"></use>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/c/GoIT"
                    target="_blank"
                    aria-label="YouTube channel"
                    className={css.networkLink}
                  >
                    <svg width={24} height={24} className={css.networkIcon}>
                      <use href="/sprite.svg#youtube"></use>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={css.containerTitle}>
              <h2 className={css.title}>
                Transforming your <span className={css.titleItalic}>body</span>{" "}
                shape with us
              </h2>

              <div>
                <p className={css.subText}>
                  Subscribe and learn about new exercises!
                </p>

                <form action="" className={css.form}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={css.input}
                  />
                  <button type="submit" className={css.button}>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          <p className={css.energyText}>Your Energy. All rights reserved.</p>
          <p>Privacy Policy / Terms of Service</p>
          <span>&#169;{date}</span>
        </div>
      </Container>
    </footer>
  );
}
