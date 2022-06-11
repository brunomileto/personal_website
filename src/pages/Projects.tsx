import { projects } from "../services/projects";

export const Projects = () => {
  return (
    <main>
      <section className="px-36 flex flex-col justify-center items-center gap-36 mb-24">
        {projects.map((project) => (
          <div key={project.id} className="max-w-6xl">
            <h1 className="text-5xl font-bold mb-4">
              {project.title} -{" "}
              {project.stacks.includes("reactjs") ? (
                <span className="text-5xl font-normal">ReactJS</span>
              ) : project.stacks.includes("pureWeb") ? (
                <span className="text-5xl font-normal">
                  Pure HTML/CSS/Javascript
                </span>
              ) : project.stacks.includes("python") ? (
                <span className="text-5xl font-normal">Python</span>
              ) : (
                ""
              )}
            </h1>
            {/* <p className="text-xl font-medium mb-10 text-brand-grey">
              {project.shortDescription}
            </p> */}
            <a href={`/project/${project.id}`} className="cursor-pointer">
              <img
                className="rounded-lg bg-brand-border"
                src={project.mainImg}
              ></img>
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};
