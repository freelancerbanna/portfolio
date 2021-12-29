import Link from "next/link";
import MyBrandImage from "../../public/image/branimg.png";
import Image from "next/image";
//
const About = () => {
  return (
    <section className="about section bd_grid" id="about">
      <div className="circle about_circleOne"></div>
      <div className="circle about_circleThree"></div>

      <h2 className="section_title">About</h2>
      <div className="aboutContainer bd_grid">
        <div className="about_text_section">
          <h2 className="about_subtitle">
            I'm a <br /> <span>junior Fullstack Developer</span>
          </h2>
          <p>
            Besides my education I am currently working in a local IT Company as
            Fullstack Web Developer. I have also earned a certified degree on
            Computer Training and Frontend Design from National Academy for
            Training Institute and Research (NACTAR)
          </p>
          <Link href="#">
            <a className="button">Download Cv</a>
          </Link>
        </div>
        <div className="aboutImage">
          <div className="aboutImageBorder"></div>
          <div className="img">
            <Image
              src={MyBrandImage}
              alt="Hasanul Haque Banna"
              height={400}
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
