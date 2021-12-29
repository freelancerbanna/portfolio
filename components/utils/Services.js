import Link from "next/link";
import { ServiceBox } from "..";
import Smiley1 from "../../public/image/smile1.svg";
import Smiley2 from "../../public/image/smile2.svg";
import Smiley3 from "../../public/image/smiley3.svg";

//
const Services = () => {
  return (
    <section className="services section bd_grid" id="services">
      <div className="circle services_circleOne"></div>
      <div className="circle services_circleThree"></div>

      <h2 className="section_title">Services</h2>
      <div className="serviceContainer bd_grid">
        <div className="serviceImage">
          <ServiceBox imgName={Smiley1} boxName={"Design"} />
          <ServiceBox imgName={Smiley2} boxName={"Developer"} />
          <ServiceBox imgName={Smiley3} boxName={"UI/UX"} />
          <ServiceBox imgName={Smiley3} boxName={"Mobile App"} />
        </div>
        <div className="service_text_section">
          <h2 className="service_subtitle">
            My awesome <br /> <span>Services</span>
          </h2>
          <p>
            Doing something great is the first step of passion
          </p>
          <Link href="#">
            <a className="button">Download Cv</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Services };
