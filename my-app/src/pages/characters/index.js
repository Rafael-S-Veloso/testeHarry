import Image from "next/image";
import logoHarry from "../../../public/logoHarry.png";
import styles from "../../styles/Characters.module.css";

function characters() {
  return (
    <div className={styles.background}>
      <header className={styles.cabecalho} />
      <div className={styles.container}>
        <Image src={logoHarry} alt="logoHarry" />
      </div>
    </div>
  );
}

export default characters;
