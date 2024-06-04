import Image from "next/image";
import Link from "next/link";

export default function CardsHouse() {
  return (
    <>
      <Link href={`/characters?house=Gryffindor`}>
        <Image
          src="/grifinoria.jpg"
          alt="Grifinória"
          width={272}
          height={288}
        />
      </Link>
      <Link href={`/characters?house=Slytherin`}>
        <Image src="/Sonserina.jpg" alt="Sonserina" width={272} height={288} />
      </Link>
      <Link href={`/characters?house=Hufflepuff`}>
        <Image src="/Lufa-lufa.jpg" alt="lufa-lufa" width={272} height={288} />
      </Link>
      <Link href={`/characters?house=Ravenclaw`}>
        <Image src="/Corvinal.jpg" alt="corvinal" width={272} height={288} />
      </Link>
    </>
  );
}
