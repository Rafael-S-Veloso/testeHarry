import styles from "../styles/Home.module.css";
import Cards from "@/components/Cards/Cards";

export default function Home() {
  return (
    <div className={styles.background}>
      {/* <Image
        src="/images/fundoHarry.jpg"
        alt="Fundo Harry Potter"
        layout="responsive"
        width={750}
        height={600}
      /> */}
      <div className={styles.box}>
        <button>Veja todos os personagens</button>
      </div>
      <div className={styles.cards}>
        <Cards />
      </div>
    </div>
  );
}
