import * as Checkbox from '@radix-ui/react-checkbox';

import {
  Automattic,
  Csharp,
  CssThree,
  Django,
  Express,
  Html5,
  Javascript,
  Nestjs,
  Nextdotjs,
  Nodedotjs,
  Openapiinitiative,
  Python,
  ReactJs,
  Styledcomponents,
  Tailwindcss,
  Typescript
} from '@icons-pack/react-simple-icons';
import { useEffect, useState } from 'react';

import ArrowRightSFillIcon from 'remixicon-react/ArrowRightSFillIcon';
import CheckFillIcon from 'remixicon-react/CheckFillIcon';
import CloseFillIcon from 'remixicon-react/CloseFillIcon';
import { Disclosure } from '@headlessui/react';
import { GET_ALL_PROJECTS_SIMPLE_QUERY } from '../libs/apollo/apolloQueries';
import Image from 'next/image';
import Link from 'next/link';
import { Spinner } from '../components/Spinner';
import { useLocale } from '../context/LocaleContext';
import { useQuery } from '@apollo/client/react/hooks';
import { useRouter } from 'next/router';

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
  "NestJs",
  "NextJs"
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
    type: "NestJs",
    icon: Nestjs,
    isSelected: false,
  },
  {
    type: "NextJs",
    icon: Nextdotjs,
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
  githubUrl: string;
  slug: string;
  projectTypes: ProjectTypeNames[];
  coverPicture: {
    url: string;
  };
}

interface GetProjectsQueryResponse {
  projects: ProjectQuery[];
}

const Projects = () => {
  const [projectTypes, setProjectTypes] = useState<ProjectType[]>(ProjectTypes);
  const [selectedProjects, setSelectedProjects] = useState<ProjectQuery[]>([])
  const [formattedSelectedProjectTypes, setFormattedSelectedProjectTypes] = useState<string>()
  const { isPtBr, locale } = useLocale();

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


  const { data, loading, error } = useQuery<GetProjectsQueryResponse>(GET_ALL_PROJECTS_SIMPLE_QUERY, {
    variables: { locales: [locale] },
  });

  useEffect(() => {
    const _selectedProjectTypes = projectTypes.filter((type) => type.isSelected);
    let _selectedProjects: ProjectQuery[] = [];
    if (data) {
      if (_selectedProjectTypes.length <= 0)
        data.projects.map(project => _selectedProjects.push({ ...project, coverPicture: { url: !project.coverPicture ? '/' : project.coverPicture.url } }))
      data.projects.forEach((project) => {
        if (_selectedProjectTypes.some((value) => project.projectTypes.includes(value.type))) {
          _selectedProjects.push({
            ...project,
            coverPicture: { url: !project.coverPicture ? "/" : project.coverPicture.url },
          });
        }
      });
    }
    const formattedSelectedTypes =
      _selectedProjectTypes.length > 3
        ? [..._selectedProjectTypes.slice(0, 3).map((selectedType) => `"${selectedType.type}"`), "..."].join(", ")
        : _selectedProjectTypes.map((selectedType) => `"${selectedType.type}"`).join(", ");
    setFormattedSelectedProjectTypes(formattedSelectedTypes)
    setSelectedProjects(_selectedProjects)
  }, [data, projectTypes])

  return (
    <main
      className="w-full h-full flex flex-col md:flex-row justify-start 
                 md:overflow-hidden overflow-scroll mb-0"
    >
      <div id="title" className="px-7 pt-6 pb-8 md:hidden">
        <span className="text-secondary-white">{isPtBr ? "_projetos" : "_projects"}</span>
      </div>
      <div
        id="lateralMenu"
        className="flex flex-col gap-1 md:gap-0 relative md:w-[calc(40000vw/1920+1px)] 
                lg:w-[calc(31100vw/1920)] md:border-r-1 md:border-lines 
                md:flex-shrink-0 md:overflow-x-hidden"
      >
        <Disclosure>
          {({ open }) => {
            return (
              <>
                <Disclosure.Button
                  className={`px-7 md:px-0 md:pl-2 md:py-2 py-1 bg-lines 
              md:bg-transparent w-full flex flex-row gap-[2px] items-center 
              md:border-b-1 md:border-t-1 md:border-lines 
              md:text-sm `}
                >
                  <ArrowRightSFillIcon
                    size={20}
                    className={open ? "rotate-90 transform transition-transform duration-300" : ""}
                  />
                  <span className=" text-secondary-white">{isPtBr ? "projetos" : "projects"}</span>
                </Disclosure.Button>
                <Disclosure.Panel
                  className="flex flex-col pl-9 md:pl-4 mt-3 mb-4 
                        gap-2 md:gap-2"
                >
                  <div className="flex flex-col gap-4">
                    {projectTypes.map((projectType) => {
                      return (
                        <div
                          key={projectType.type}
                          className="text-sm md:text-xs flex md:w-fit flex-row 
                                      items-center gap-6 md:gap-4"
                        >
                          <Checkbox.Root
                            checked={projectType.isSelected}
                            name={projectType.type}
                            id={projectType.type}
                            onCheckedChange={() => handleSelectedType(projectType)}
                            className="bg-transparent border-1 border-secondary-sky 
                                                w-5 h-5 rounded-sm md:w-4 md:h-4"
                          >
                            <Checkbox.Indicator
                              className="flex items-center justify-center p-0
                                  text-secondary-white focus:bg-secondary-sky"
                            >
                              <CheckFillIcon className="w-fit h-fit" />
                            </Checkbox.Indicator>
                          </Checkbox.Root>
                          <label htmlFor={projectType.type} className="flex gap-2 items-center">
                            <projectType.icon
                              size={18}
                              className={`${projectType.isSelected ? "text-secondary-sky" : "text-secondary-sky/50"}`}
                            />
                            <span className={`${projectType.isSelected ? "text-white" : "text-secondary-sky"}`}>
                              {projectType.type}
                            </span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>
      </div>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div
          id="content"
          className="mt-9 md:mt-0  md:text-sm  px-7 md:px-0 flex flex-col 
                     md:flex-row gap-9 md:gap-0 md:w-full pb-6"
        >
          <section className="flex flex-col gap-4 md:gap-0 md:w-full ">
            <header
              id="content-header"
              className="md:flex  md:flex-row md:gap-3 md:border-b-1 
                     md:border-lines md:pl-2  md:w-full md:items-center "
            >
              <span className="text-secondary-white md:py-2">{isPtBr ? "\\\\ projetos" : "\\ projects"} </span>
              <span className="text-secondary-sky md:py-2">\ [{formattedSelectedProjectTypes}]</span>
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
                {selectedProjects.length > 0 &&
                  selectedProjects.map((selectedProject, index) => {
                    return (
                      <div
                        id="projectCard"
                        key={selectedProject.id}
                        className="flex flex-col items-center gap-4 w-full max-w-[400px] "
                      >
                        <header className="w-full text-sm">
                          <span className="text-secondary-blue font-bold">
                            {isPtBr ? "Projeto" : "Project"} {index + 1}
                          </span>
                          <span> / {selectedProject.shortname}</span>
                        </header>
                        <div
                          id="card"
                          className="w-full h-[380px] flex flex-col border-1
                                   border-lines rounded-2xl overflow-clip"
                        >
                          <div className="h-full relative">
                            <div className="h-full w-full border-b-1 border-lines">
                              <Image layout="fill" src={selectedProject.coverPicture.url || ""} />
                            </div>
                            {/* <div className="absolute right-4 top-2 flex flex-col gap-2"> */}
                            {/* <div className="absolute right-4 top-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
                            <div className="absolute right-4 top-2 flex flex-wrap gap-2">

                              {ProjectTypes.map((type) => {
                                if (selectedProject.projectTypes.includes(type.type)) {
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
                            <span>{selectedProject.shortDescription}</span>
                            <div>
                              <Link href={selectedProject.githubUrl} legacyBehavior

                              >
                                <a className="bg-lines text-secondary-white text-sm py-2
                                  px-3 rounded" target='_blank'>
                                  {isPtBr ? "ver_projeto" : "view_project"}</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default Projects;
