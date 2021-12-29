import Image from "next/image";
import Link from "next/link";
//
const ServiceBox = ({ imgName, boxName }) => {
  return (
    <div className="service_box">
      <Image src={imgName} alt="" height={100} width={100} />
      <h2>{boxName}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
        perspiciatis harum quidem quis inventore blanditiis?
      </p>
      <Link href="#">
        <a className="service_button">Learn More</a>
      </Link>
    </div>
  );
};

export { ServiceBox };
