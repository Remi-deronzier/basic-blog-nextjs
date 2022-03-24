import Image from "next/image";
import { useRouter } from "next/router";

import SelfPortrait from "../public/images/portrait-zoom.png";

import styles from "../styles/Header.module.css";

export default function Header() {
  const { pathname } = useRouter();

  const isHome = pathname === "/";

  return (
    <header>
      <div className={styles.portrait_wrapper}>
        <Image alt="portrait Rémi DERONZIER" src={SelfPortrait} />
      </div>
      {isHome ? <h1>Rémi DERONZIER</h1> : <h2>Rémi DERONZIER</h2>}
    </header>
  );
}
