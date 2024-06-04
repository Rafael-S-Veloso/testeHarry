import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/card.module.css";

export default function Card({ character }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.Card} onClick={handleOpenModal}>
        <Image
          src={`${character.image}`}
          width={163}
          height={227}
          alt={`Imagem do Personagens ${character.name}`}
        />
      </div>
      <h3 className={styles.title}>{character.name}</h3>
    </div>
  );
}
