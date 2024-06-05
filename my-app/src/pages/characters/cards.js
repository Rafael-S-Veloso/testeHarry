import Image from "next/image";
import styles from "../../styles/card.module.css";
import DefaultHarry from "../../../public/logoDefaultHarry.jpg";

function Card({ character }) {
  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.Card}>
        <Image
          src={character.image || DefaultHarry}
          width={163}
          height={227}
          alt={`Imagem do Personagem ${character.name || "Default Image"}`}
        />
      </div>
      <h3 className={styles.title}>{character.name}</h3>
      <p>{character.house}</p>
    </div>
  );
}

export default Card;
