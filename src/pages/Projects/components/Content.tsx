import { ProjectQuery, ProjectType } from '../';
import { ProjectsWrapper } from './ProjectsWrapper';

interface Props {
  selectedTypes: ProjectType[];
  selectedProjects: ProjectQuery[];
}

export function Content({ selectedProjects, selectedTypes }: Props) {
  return (
    <div
      id="content"
      className="mt-9 md:mt-0  md:text-sm  px-7 md:px-0 flex flex-col 
                 md:flex-row gap-9 md:gap-0 md:w-full pb-6"
    >
      <ProjectsWrapper
        selectedTypes={selectedTypes}
        selectedProjects={selectedProjects}
      />
    </div>
  );
}
