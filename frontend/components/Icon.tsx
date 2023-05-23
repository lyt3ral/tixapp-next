import Image from "next/image";

const Icon = () => {
  return (
    <div className="flex flex-row">
      <p className="text-4xl font-bold">TixApp</p>
      <Image
        src={"static/images/logo.svg"}
        height={64}
        width={64}
        alt="ticket"
      ></Image>
    </div>
  );
};

export default Icon;
