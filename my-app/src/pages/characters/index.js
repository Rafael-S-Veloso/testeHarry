import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoHarry from "../../../public/logoHarry.png";
import styles from "../../styles/characters.module.css";
import LogoMeio from "../../../public/LogoMeio.png";
import Card from "./cards";
import Modal from "../../components/Modal/Modal";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { house } = router.query;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    if (house) {
      const filter = characters.filter((item) => item.house === house);
      setFilteredCharacters(filter.length > 0 ? filter : characters);
    } else {
      setFilteredCharacters(characters);
    }
  }, [house, characters]);

  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedCharacter(null);
  };
  const translateHouseName = () => {
    switch (house) {
      case "Gryffindor":
        return "Grifinória";
      case "Slytherin":
        return "Sonserina";
      case "Hufflepuff":
        return "Lufa-lufa";
      case "Ravenclaw":
        return "Corvinal";
      default:
        return "Personagens";
    }
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
        <p>{translateHouseName()}</p>
        <div className={styles.border} />
      </div>
      <div className={styles.card}>
        {filteredCharacters.map((character, index) => (
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
            <div className={styles.info}>
              <h2>{selectedCharacter.name || "Nao encontrado"}</h2>

              <p>House: {selectedCharacter.house || "Nao encontrado"}</p>
              <p>Species: {selectedCharacter.species || "Nao encontrado"}</p>
              <p>Gender: {selectedCharacter.gender || "Nao encontrado"}</p>
              <p>
                Birthdate: {selectedCharacter.dateOfBirth || "Nao encontrado"}
              </p>
              <p>Ancestry: {selectedCharacter.ancestry || "Nao encontrado"}</p>
              <p>
                Eye Colour: {selectedCharacter.eyeColour || "Nao encontrado"}
              </p>
              <p>
                Hair Colour: {selectedCharacter.hairColour || "Nao encontrado"}
              </p>
              <p>
                Wand: {selectedCharacter.wand.wood || "Nao encontrado"},{" "}
                {selectedCharacter.wand.core || "Nao encontrado"},{" "}
                {selectedCharacter.wand.length} inches
              </p>
              <p>Patronus: {selectedCharacter.patronus || "Nao encontrado"}</p>
              <p>Actor: {selectedCharacter.actor || "Nao encontrado"}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Characters;
