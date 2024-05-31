import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Cards from "@/components/Cards/Cards";
import Image from "next/image";
import Logo from "../../public/logo2.png";
import LogoMeio from "../../public/LogoMeio.png";

function LogoSection({ handleButtonClick }) {
  return (
    <div className={styles.logo}>
      <Image src={Logo} alt="Logo principal" />
      <div className={styles.box}>
        <button onClick={handleButtonClick}>Veja todos os personagens</button>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  function handleButtonClick() {
    router.push("/characters");
  }

  return (
    <div className={styles.background}>
      <header className={styles.cabecalho} />
      <main className={styles.container}>
        <LogoSection handleButtonClick={handleButtonClick} />
        <div className={styles.main}>
          <Image src={LogoMeio} alt="Logo meio" />
          <p>Navegue pelas Casas</p>
          <div className={styles.border} />
        </div>
        <div className={styles.cards}>
          <Cards />
        </div>
      </main>
    </div>
  );
}
