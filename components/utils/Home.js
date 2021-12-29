import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcons, TypedText } from "..";
import Me from "../../public/image/me.png";
import Smiley1 from "../../public/image/smile1.svg";
import BgPath from "../../public/image/bgpath.svg";
import Star from "../../public/image/star.svg";
import Star2 from "../../public/image/star2.svg";
import Star3 from "../../public/image/star3.svg";
import Medal from "../../public/image/medal.svg";
//
import { TimelineLite } from "gsap";
//
const Home = () => {
  useEffect(() => {
    const timeline = new TimelineLite({ delay: 0.3 });
    timeline
      .from(".homeTitle", {
        duration: 0.5,
        opacity: 0,
        y: 15,
        delay: 1.5,
      })
      .fromTo(
        ".profileBg",
        { opacity: 0.5, scale: 0 },
        { opacity: 1, scale: 1, ease: "elastic.out(1,0.3)" }
      )
      .from(".button", { duration: 0.5, opacity: 0, y: 20, ease: "bounce.out" })
      .from(
        ".homeSocial a",
        {
          y: 160,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "Start"
      )
      .from(".profileImg", { duration: 0.1, opacity: 0 })
      .fromTo(
        ".smiley",
        { opacity: 0.5, scale: 0 },
        { opacity: 1, scale: 1, ease: "elastic.out(1,0.3)" },
        "Start"
      )
      .fromTo(
        ".star1",
        { opacity: 0.5, scale: 0 },
        { opacity: 1, scale: 1, ease: "elastic.out(1,0.3)" },
        "Start"
      )
      .fromTo(
        ".star2",
        { opacity: 0.5, scale: 0 },
        { opacity: 1, scale: 1, ease: "elastic.out(1,0.3)" },
        "Start"
      )
      .fromTo(
        ".star3",
        { opacity: 0.5, scale: 0 },
        { opacity: 1, scale: 1, ease: "elastic.out(1,0.3)" },
        "Start"
      )
      .from(
        ".box1",
        { duration: 0.8, opacity: 0, xPercent: 100, ease: "bac.out(1.7)" },
        "Start"
      )
      .from(
        ".box2",
        { duration: 0.8, opacity: 0, xPercent: 100, ease: "bac.out(1.7)" },
        "Start"
      );
  }, []);
  return (
    <section className="home section bd_grid" id="#">
      <div className="circle circleOne"></div>
      <div className="circle circleTwo"></div>
      <div className="circle circleThree"></div>
      <div className="homeData">
        <h1 className="homeTitle">
          Hi, I'm <br /> <span>Freelancer Banna</span> <br />
          <TypedText />
        </h1>

        <Link href="/#contact">
          <a className="button">Contact Me</a>
        </Link>
      </div>
      <div className="homeSocial">
        <SocialIcons />
      </div>
      <div className="homeImg">
        <div className="profileImg">
          <Image
            src={Me}
            alt="Hasanul Haque Banna"
            width="500px"
            height="500px"
          />
        </div>
        <div className="profileBg">
          <Image src={BgPath} alt="bg" width={500} height={500} />
        </div>
        <div className="smiley">
          <Image src={Smiley1} alt="Smiley" width={100} height={100} />
        </div>
        <div className="star1">
          <Image src={Star} alt="Star" width={100} height={100} />
        </div>
        <div className="star2">
          <Image src={Star2} alt="Star" width={100} height={100} />
        </div>
        <div className="star3">
          <Image src={Star3} alt="Star" width={100} height={100} />
        </div>
        <div className="box box1">
          <div className="imgBox">
            <Image src={Smiley1} height={100} width={100} alt="smile" />
          </div>
          <div className="contentBox">
            <h2>Ui/Ux</h2>
            <p>Passion to declare the performance</p>
          </div>
        </div>

        <div className="box box2">
          <div className="imgBox">
            <Image src={Medal} height={100} width={100} alt="smile" />
          </div>
          <div className="contentBox">
            <h2>Awards</h2>
            <p>Bring the performance getting outstand</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Home };
