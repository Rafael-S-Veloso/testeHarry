import Image from "next/image";
import Link from "next/link";
import GRIFINORIA from "../../../public/grifinoria.jpg";
import SONCERINA from "../../../public/Sonserina.jpg";
import LUFA_LUFA from "../../../public/Lufa-lufa.jpg";
import CORVINAL from "../../../public/Corvinal.jpg";
import styles from "@/styles/CardsHouse.module.css";

export default function CardsHouse() {
  return (
    <>
      <div className={styles.box}>
        <Link href={`/characters?house=Gryffindor`}>
          <Image src={GRIFINORIA} alt="Grifinória" />
        </Link>
      </div>
      <div className={styles.box}>
        <Link href={`/characters?house=Slytherin`}>
          <Image src={SONCERINA} alt="Sonserina" />
        </Link>
      </div>
      <div className={styles.box}>
        <Link href={`/characters?house=Hufflepuff`}>
          <Image src={LUFA_LUFA} alt="lufa-lufa" />
        </Link>
      </div>
      <div className={styles.box}>
        <Link href={`/characters?house=Ravenclaw`}>
          <Image src={CORVINAL} alt="corvinal" />
        </Link>
      </div>
    </>
  );
}
