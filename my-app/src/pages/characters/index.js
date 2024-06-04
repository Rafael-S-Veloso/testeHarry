import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoHarry from "../../../public/logoHarry.png";
import styles from "../../styles/characters.module.css";
import LogoMeio from "../../../public/LogoMeio.png";
import Card from "./cards";
import Modal from "../../components/Modal/Modal";

export async function getStaticProps() {
  const api = "https://hp-api.herokuapp.com/api/characters";
  const res = await fetch(`${api}`);
  const data = await res.json();

  const characters = data.map((character) => ({
    ...character,
  }));

  return {
    props: {
      characters,
    },
  };
}

function Characters({ characters }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedCharacter(null);
  };

  return (
    <div className={styles.background}>
      <header className={styles.cabecalho}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logoHarry} alt="logoHarry" />
          </Link>
        </div>
      </header>
      <div className={styles.container}>
        <Image src={LogoMeio} alt="Logo meio" />
        <p>PERSONAGENS</p>
        <div className={styles.border} />
      </div>
      <div className={styles.card}>
        {characters.map((character, index) => (
          <div key={index} onClick={() => openModal(character)}>
            <Card character={character} />
          </div>
        ))}
      </div>
      {isModalVisible && selectedCharacter && (
        <Modal isOpen={isModalVisible} onClose={closeModal}>
          <div className={styles.containerModal}>
            <div>
              <Image
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                width={256}
                height={356}
              />
            </div>
            <h2>{selectedCharacter.name}</h2>
            <p>House: {selectedCharacter.house}</p>
            <p>Species: {selectedCharacter.species}</p>
            <p>Gender: {selectedCharacter.gender}</p>
            <p>Birthdate: {selectedCharacter.dateOfBirth}</p>
            <p>Ancestry: {selectedCharacter.ancestry}</p>
            <p>Eye Colour: {selectedCharacter.eyeColour}</p>
            <p>Hair Colour: {selectedCharacter.hairColour}</p>
            <p>
              Wand: {selectedCharacter.wand.wood}, {selectedCharacter.wand.core}
              , {selectedCharacter.wand.length} inches
            </p>
            <p>Patronus: {selectedCharacter.patronus}</p>
            <p>Actor: {selectedCharacter.actor}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Characters;
