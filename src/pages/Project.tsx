import { useParams } from "react-router-dom";
import { ButtonMdArrow } from "../components/ButtonMdArrow";
import { projects } from "../services/projects";

export const Project = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id!))!;
  const handleGoToLiveProject = () => {
    window.open(project.href, "_blank");
  };
  return (
    <main className="flex flex-col justify-center items-center px-36 pt-16 w-screen">
      <section className="flex flex-col justify-center items-center max-w-6xl mb-32">
        <header className="flex flex-col items-start w-full">
          <h5 className="text-xl font-medium text-brand-grey mb-6">
            Showcase do projeto
          </h5>
          <h1 className="text-5xl font-bold mb-16">{project.title}</h1>
        </header>

        <img src={project.mainImg} className="bg-brand-border rounded-lg" />
      </section>
      <section className="flex flex-col justify-center items-center max-w-6xl w-[72rem] mb-32">
        <div className="flex flex-col justify-start items-start w-full mb-32">
          <h1 className="text-4xl font-medium mb-4">Descrição</h1>

          <p className="text-base font-normal">{project.shortDescription}</p>
        </div>
        <ButtonMdArrow handleClick={handleGoToLiveProject}>
          Veja este projeto online
        </ButtonMdArrow>
      </section>
      <section className="flex flex-col justify-center item-center">
        <img src={project.fullImg} />
      </section>
    </main>
  );
};
