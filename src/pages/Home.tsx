import { ButtonDownload } from "../components/ButtonDownload";
import { ButtonSm } from "../components/ButtonSm";
import personalImg from "../assets/jpg/personal.jpg";
import { ButtonViewMore } from "../components/ButtonViewMore";
import { ButtonMdArrow } from "../components/ButtonMdArrow";
import { projects } from "../services/projects";
import { useNavigate } from "react-router-dom";
import { paths } from "../types/path";
import { siteData } from "../services/data";

const homeData =
  window.navigator.language.includes("pt") ||
  window.navigator.language.includes("br")
    ? siteData.home.ptBr
    : siteData.home.enUs;

console.log(window.navigator.language);

export const Home = () => {
  const navigate = useNavigate();
  let projectCounter = 0;

  const handleSeeProjectsButtonClick = () => {
    navigate(paths.projects.path, { replace: true });
  };
  const handleKnowMoreButtonClick = () => {
    navigate(paths.about.path, { replace: false });
  };
  return (
    <main className="px-5">
      {/* Hero section */}
      <section
        id="hero"
        className="w-full h-[45.75rem] flex flex-col justify-center items-center text-6xl font-bold font-DMSans"
      >
        <h1 className="mb-5">
          {homeData.sections.heroSection.title[0]}{" "}
          <span className="text-brand-primary">
            {homeData.sections.heroSection.title[1]}
          </span>
        </h1>
        <h1>{homeData.sections.heroSection.title[2]}</h1>
        <h5 className="text-2xl font-medium my-12">
          {homeData.sections.heroSection.paragraph[0]}
        </h5>
        <div className="flex gap-8">
          <ButtonSm handleClick={handleSeeProjectsButtonClick}>
            {homeData.sections.heroSection.buttonProjects}
          </ButtonSm>
          <ButtonDownload>
            {homeData.sections.heroSection.buttonCV}
          </ButtonDownload>
        </div>
      </section>
      {/* About section */}
      <section id="about" className="flex flex-row justify-center items-center">
        <div className="bg-brand-border w-[60.43rem] h-fit p-6 border-2 rounded-lg border-brand-border flex flex-row justify-start items-start gap-8 mb-32">
          <div className="">
            <img
              src={personalImg}
              alt="Foto de Bruno Mileto"
              className="w-[30rem] rounded-md"
            />
          </div>
          <div className="max-w-lg">
            <h1 className="font-medium text-5xl flex justify-start items-center mb-8">
              {homeData.sections.aboutSection.title}
            </h1>
            <div className="mb-6">
              {homeData.sections.aboutSection.paragraph.map((paragraph) => (
                <>
                  <p className="text-base font-normal">{paragraph}</p>
                  <>&nbsp;</>
                </>
              ))}
            </div>
            <ButtonViewMore handleClick={handleKnowMoreButtonClick}>
              {homeData.sections.aboutSection.button}
            </ButtonViewMore>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="flex flex-col justify-center items-center mb-32 "
      >
        <div className="max-w-[72rem] w-[72rem] flex flex-col justify-center items-center">
          <h1 className="w-full font-medium text-5xl mb-16">
            {homeData.sections.projectsSection.sectionTitle}
          </h1>
          <div
            id="projectsList"
            className="max-w-6xl flex flex-col justify-center items-center gap-24 mb-28"
          >
            {projects
              .filter((project) => project.stacks.includes("reactjs"))
              .map((project) => {
                if (projectCounter <= 3) {
                  projectCounter++;
                  return (
                    <a
                      key={project.id}
                      href={`/project/${project.id}`}
                      className={`w-full h-[33rem] rounded-lg bg-no-repeat bg-auto bg-center cursor-pointer bg-[url('${project.mainImg}')]`}
                    >
                      <p className="text-xl font-medium mb-2 text-brand-grey">
                        {project.title} -{" "}
                        {project.stacks.includes("reactjs")
                          ? "ReactJS"
                          : project.stacks.includes("pureWeb")
                          ? "Pure HTML/CSS/Javascript"
                          : project.stacks.includes("python")
                          ? "Python"
                          : ""}
                      </p>
                      <div className="flex flex-row"></div>
                      <img
                        className="rounded-lg max-w-6xl max-h-[72rem] bg-brand-border"
                        src={project.mainImg}
                      />
                    </a>
                  );
                } else {
                  return <></>;
                }
              })}
          </div>
          <ButtonMdArrow handleClick={handleSeeProjectsButtonClick}>
            {homeData.sections.projectsSection.button}
          </ButtonMdArrow>
        </div>
      </section>
    </main>
  );
};
