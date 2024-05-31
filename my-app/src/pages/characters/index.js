import Image from "next/image";
import logoHarry from "../../../public/logoHarry.png";
import styles from "../../styles/characters.module.css";
import LogoMeio from "../../../public/LogoMeio.png";

function Characters() {
  return (
    <div className={styles.background}>
      <header className={styles.cabecalho}>
        <div className={styles.logo}>
          <Image src={logoHarry} alt="logoHarry" />
        </div>
      </header>
      <div className={styles.container}>
        <Image src={LogoMeio} alt="Logo meio" />
        <p>PERSONAGENS</p>
        <div className={styles.border} />
      </div>
    </div>
  );
}

export default Characters;
