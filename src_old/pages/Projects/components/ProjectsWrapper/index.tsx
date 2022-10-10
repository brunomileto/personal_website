import CloseFillIcon from 'remixicon-react/CloseFillIcon';

import { ProjectQuery, ProjectType } from '../..';
import { ProjectCard } from './components/ProjectCard';

interface Props {
  selectedTypes: ProjectType[];
  selectedProjects: ProjectQuery[];
}

export function ProjectsWrapper({ selectedProjects, selectedTypes }: Props) {
  const formattedSelectedTypes =
    selectedTypes.length > 3
      ? [
          ...selectedTypes
            .slice(0, 3)
            .map((selectedType) => `"${selectedType.type}"`),
          "...",
        ].join(", ")
      : selectedTypes
          .map((selectedType) => `"${selectedType.type}"`)
          .join(", ");
  return (
    <section className="flex flex-col gap-4 md:gap-0 md:w-full ">
      <header
        id="content-header"
        className="md:flex  md:flex-row md:gap-3 md:border-b-1 
                 md:border-lines md:pl-2  md:w-full md:items-center "
      >
        <span className="text-secondary-white md:py-2">\\ projects </span>
        <span className="text-secondary-sky md:py-2">
          \ [{formattedSelectedTypes}]
        </span>
        <div
          className="hidden md:inline cursor-pointer ml-6 pr-4 border-r-1 
                        h-full border-lines md:py-2"
        >
          <CloseFillIcon size={20} className="" />
        </div>
      </header>
      <div
        className="w-full h-full md:overflow-scroll md:scrollbar md:pr-4
                    md:scrollbar-thumb-secondary-sky  "
      >
        <div
          className="h-full flex flex-col items-center gap-8 md:w-full md:pt-5 
                        md:border-r-1 md:border-lines lg:grid lg:grid-cols-2 lg:px-16
                        xl:grid-cols-3 2xl:px-32"
        >
          {selectedProjects &&
            selectedProjects.map((selectedProject, index) => {
              return (
                <ProjectCard
                  key={selectedProject.id}
                  project={selectedProject}
                  index={index}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
//SSSCROOOLLLBBAAARR
