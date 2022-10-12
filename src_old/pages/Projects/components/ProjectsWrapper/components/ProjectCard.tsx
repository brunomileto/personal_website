import ReactjsLineIcon from 'remixicon-react/ReactjsLineIcon';

import { ProjectQuery, ProjectType, ProjectTypes } from '../../..';

interface Props {
  project: ProjectQuery;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[400px] ">
      <header className="w-full text-sm">
        <span className="text-secondary-blue font-bold">
          Project {index + 1}
        </span>
        <span> / {project.shortname}</span>
      </header>
      <div
        id="card"
        className="w-full h-[380px] flex flex-col border-1
                 border-lines rounded-2xl overflow-clip"
      >
        <div className="h-full relative">
          <div className="h-full w-full relative">
            <img className="absolute" src={project.coverPicture.url} />
          </div>
          <div className="absolute right-4 top-2 flex flex-col gap-2">
            {ProjectTypes.map((type) => {
              if (project.projectTypes.includes(type.type)) {
                return (
                  <div
                    key={type.type}
                    className=" w-6 h-6 bg-[#86E1F9] rounded top-4 right-0
                                   flex justify-center items-center"
                  >
                    <type.icon size={16} color="bg-black" />
                    {/* <selectedType.icon size={22} color="bg-black" /> */}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="h-[90%] pt-7 mt-6 pb-8 pl-8 flex flex-col gap-6">
          <span>
            Duis aute irure dolor in velit esse cillum incididunt ut labore.
          </span>
          <div>
            <button
              className="bg-lines text-secondary-white text-sm py-2 
                                px-3 rounded"
            >
              view_project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
