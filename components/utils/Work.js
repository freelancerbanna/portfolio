import Link from "next/link";
import Image from "next/image";
import BrandImage from "../../public/image/clientgroup.svg";
//
const Work = () => {
  return (
    <section className="work section bd_grid" id="work">
      <div className="circle work_circleOne"></div>
      <div className="circle work_circleThree"></div>

      <h2 className="section_title">Work</h2>
      <div className="workContainer bd_grid">
        <div className="workImage">
          <div className="img">
            <Image src={BrandImage} alt="" height={300} width={300} />
          </div>
        </div>
        <div className="work_text_section">
          <h2 className="work_subtitle">
            I work for all this <br /> <span>Brand & Clients</span>
          </h2>
          <p>Your contribution, My passion, let bring something amazing.</p>
          <Link href="/projects">
            <a className="button">See more</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Work };
