import { ProjectImg } from "..";
import Image from "next/image";
import Link from "next/link";
//
const Projects = () => {
  return (
    <section className="projects section bd_grid" id="projects">
      <div className="circle ptojects_circleOne"></div>
      <div className="circle ptojects_circleThree"></div>

      <h2 className="section_title">Projects</h2>
      <div className="ptojectsContainer bd_grid">
        <div className="projectsImage">
          {ProjectImg &&
            ProjectImg.map((n) => (
              <div key={n.id} className="img">
                <Image src={n.imageSrc} alt={n.alt} width={1000} height={800} />
              </div>
            ))}
          <Link href="/projects">
            <a className="button service_button">More projects</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Projects };
