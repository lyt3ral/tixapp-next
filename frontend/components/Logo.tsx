import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-row items-center">
      <p className="text-4xl font-bold">TixApp</p>
      <div>
        <Image
          src={"static/images/logo.svg"}
          height={64}
          width={64}
          alt="ticket"
        ></Image>
      </div>
    </div>
  );
}
