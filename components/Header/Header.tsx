import Link from "next/link";
import Container from "../Container/Container";

export default function Header() {
  return (
    <header>
      <Container>
        <Link href="/">
          <svg width={132} height={24}>
            <use href="/sprite.svg#logo"></use>
          </svg>
        </Link>
      </Container>
    </header>
  );
}
