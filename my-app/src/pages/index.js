import styles from "../styles/Home.module.css";
import Cards from "@/components/Cards/Cards";

export default function Home() {
  function handleButtonClick() {}

  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <button onClick={handleButtonClick}>Veja todos os personagens</button>
      </div>
      <div className={styles.cards}>
        <Cards />
      </div>
    </div>
  );
}
