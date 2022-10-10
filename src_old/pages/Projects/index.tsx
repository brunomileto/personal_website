import { useState } from 'react';

import { useQuery } from '@apollo/client/react/hooks';
import {
    Automattic, Csharp, CssThree, Django, Express, Html5, Javascript, Nodedotjs, Openapiinitiative,
    Python, ReactJs, Styledcomponents, Tailwindcss, Typescript
} from '@icons-pack/react-simple-icons';

import { Spinner } from '../../components/Spinner';
import { GET_ALL_PROJECTS_SIMPLE_QUERY } from '../../lib/apolloQueries';
import { Content } from './components/Content';
import { LateralMenu } from './components/LateralMenu';
import { MobileTitle } from './components/MobileTitle';

const ProjectTypeNamesArray = [
  "Automation",
  "CSharp",
  "CSS",
  "Django",
  "ExpressJs",
  "HTML",
  "Javascript",
  "Node",
  "Python",
  "ReactJs",
  "RestAPI",
  "StyledComponents",
  "TailwindCss",
  "Typescript",
] as const;

type ProjectTypeNames = typeof ProjectTypeNamesArray[number];

export interface ProjectType {
  type: ProjectTypeNames;
  icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      /**
       * Hex color or color name
       */
      title?: string | undefined;
      /**
       * The size of the Icon.
       */
      color?: string | undefined;
      /**
       * The title provides an accessible short text description to the SVG
       */
      size?: string | number | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  isSelected: boolean;
}

export const ProjectTypes: ProjectType[] = [
  {
    type: "Automation",
    icon: Automattic,
    isSelected: false,
  },
  {
    type: "CSS",
    icon: CssThree,
    isSelected: false,
  },
  {
    type: "CSharp",
    icon: Csharp,
    isSelected: false,
  },
  {
    type: "Django",
    icon: Django,
    isSelected: false,
  },
  {
    type: "ExpressJs",
    icon: Express,
    isSelected: false,
  },
  {
    type: "HTML",
    icon: Html5,
    isSelected: false,
  },
  {
    type: "Javascript",
    icon: Javascript,
    isSelected: false,
  },
  {
    type: "Node",
    icon: Nodedotjs,
    isSelected: false,
  },
  {
    type: "Python",
    icon: Python,
    isSelected: false,
  },
  {
    type: "ReactJs",
    icon: ReactJs,
    isSelected: false,
  },
  {
    type: "RestAPI",
    icon: Openapiinitiative,
    isSelected: false,
  },
  {
    type: "StyledComponents",
    icon: Styledcomponents,
    isSelected: false,
  },
  {
    type: "TailwindCss",
    icon: Tailwindcss,
    isSelected: false,
  },
  {
    type: "Typescript",
    icon: Typescript,
    isSelected: false,
  },
];

export interface ProjectQuery {
  id: string;
  shortname: string;
  shortDescription: string;
  externalUrl: string;
  slug: string;
  projectTypes: ProjectTypeNames[];
  coverPicture: {
    url: string;
  };
}

interface GetProjectsQueryResponse {
  projects: ProjectQuery[];
}

export function Projects() {
  const [projectTypes, setProjectTypes] = useState<ProjectType[]>(ProjectTypes);

  function handleSelectedType(selectedType: ProjectType) {
    const actualizedProjectTypes = [
      ...projectTypes.map((projectType) => {
        if (projectType.type === selectedType.type) {
          projectType.isSelected = !selectedType.isSelected;
        }
        return projectType;
      }),
    ];
    setProjectTypes(actualizedProjectTypes);
  }

  const { data, loading, error } = useQuery<GetProjectsQueryResponse>(
    GET_ALL_PROJECTS_SIMPLE_QUERY
  );

  const selectedTypes = projectTypes.filter((type) => type.isSelected);

  let selectedProjects: ProjectQuery[] | undefined = [];

  data?.projects.forEach((project) => {
    if (
      selectedTypes.some((value) => project.projectTypes.includes(value.type))
    ) {
      selectedProjects?.push(project);
    }
  });

  return (
    <main
      className="w-full h-full flex flex-col md:flex-row justify-start 
                 md:overflow-hidden overflow-scroll mb-0"
    >
      <MobileTitle />
      <LateralMenu types={projectTypes} onSelectedType={handleSelectedType} />
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <Content
          selectedTypes={selectedTypes ? selectedTypes : ProjectTypes}
          selectedProjects={
            selectedProjects
              ? selectedProjects.length > 0
                ? selectedProjects!
                : data?.projects!
              : data?.projects!
          }
        />
      )}
    </main>
  );
}
