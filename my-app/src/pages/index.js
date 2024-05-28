import Image from "next/image";
import styles from "../styles..css/Home.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      <Image
        src="/images/fundoHarry.jpg"
        alt="Fundo Harry Potter"
        layout="responsive"
        width={750}
        height={600}
      />
      <div className={styles.button}>
        <button>Veja todos os personagens</button>
      </div>
      <div className={styles.logo}>
        
        <Image
          src="/images/grifinoria.jpg"
          alt="Grifinória"
          width={356}
          height={288}
        />
        <Image
          src="/images/Sonserina.jpg"
          alt="Sonserina"
          width={272}
          height={288}
        />
        <Image
          src="/images/Lufa-lufa.jpg"
          alt="Grifinória"
          width={272}
          height={288}
          />
          <Image
          src="/images/Corvinal.jpg"
          alt="corvinal"
          width={272}
          height={288}
        />
      </div>
    </div>
  );
}
