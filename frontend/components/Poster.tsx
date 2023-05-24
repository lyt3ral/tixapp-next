import Image from "next/image";

export default function Poster() {
  return (
    <>
      <Image
        src="/static/images/poster.jpg"
        width={200}
        height={300}
        alt="default poster"
      ></Image>
    </>
  );
};

  