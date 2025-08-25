import Image from "next/image";
import Container from "../Container/Container";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.section}>
      <Container>
        <h1 className={css.title}>
          <svg width={38} height={38} className={css.icon}>
            <use href="/sprite.svg#sun"></use>
          </svg>
          Get <span className={css.titleItalic}>Body</span> in shape, Stay
          healthy
        </h1>

        <p className={css.text}>
          Transform your physique and embrace a healthier lifestyle with our
          comprehensive fitness and nutrition support.
        </p>

        <div className={css.containerImage}>
          <Image
            src="/women-sportswear-working-out-outdoors.png"
            alt="women sportswear working out outdoors"
            fill
            priority
            sizes="
          (max-width: 767px) 100%, 
          (max-width: 1439px) 768px,
          1440px"
            className={css.image}
          />
        </div>

        <div className={css.containerList}>
          <ul className={css.list}>
            <li className={css.listItem}>#Sport</li>
            <li className={css.listItem}>#Healthy</li>
            <li className={css.listItem}>#Workout</li>
            <li className={css.listItem}>#Diet</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
