import { RemixiconReactIconComponentType } from "remixicon-react";
import ReactjsFillIcon from "remixicon-react/ReactjsFillIcon";

export enum ProjectTypeName {
  React = "React",
  HTML = "HTML",
  CSS = "CSS",
  Vue = "Vue",
  Angular = "Angular",
  Gatsby = "Gatsby",
  Flutter = "Flutter",
}

export interface ProjectType {
  type: ProjectTypeName;
  icon: RemixiconReactIconComponentType;
  isSelected: boolean;
}

export interface Project {
  number: number;
  name: string;
  shortDescription: string;
  projectTypes: ProjectType[];
}

export const ProjectsData: Project[] = [
  {
    name: "projeto1",
    number: 1,
    projectTypes: [
      {
        type: ProjectTypeName.Angular,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
    ],
    shortDescription: "shortDescription,shortDescription,shortDescription",
  },
  {
    name: "projeto2",
    number: 2,
    projectTypes: [
      {
        type: ProjectTypeName.Angular,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
      { type: ProjectTypeName.CSS, isSelected: false, icon: ReactjsFillIcon },
      {
        type: ProjectTypeName.Gatsby,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
    ],
    shortDescription: "shortDescription,shortDescription,shortDescription",
  },
  {
    name: "projeto3",
    number: 3,
    projectTypes: [
      {
        type: ProjectTypeName.Angular,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
      {
        type: ProjectTypeName.Gatsby,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
    ],
    shortDescription: "shortDescription,shortDescription,shortDescription",
  },
  {
    name: "projeto4",
    number: 4,
    projectTypes: [
      {
        type: ProjectTypeName.Angular,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
      {
        type: ProjectTypeName.Gatsby,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
      { type: ProjectTypeName.CSS, isSelected: false, icon: ReactjsFillIcon },
    ],
    shortDescription: "shortDescription,shortDescription,shortDescription",
  },
  {
    name: "projeto5",
    number: 5,
    projectTypes: [
      {
        type: ProjectTypeName.Angular,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
    ],
    shortDescription: "shortDescription,shortDescription,shortDescription",
  },
  {
    name: "projeto6",
    number: 6,
    projectTypes: [
      {
        type: ProjectTypeName.Angular,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
      {
        type: ProjectTypeName.Gatsby,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
    ],
    shortDescription: "shortDescription,shortDescription,shortDescription",
  },
  {
    name: "projeto7",
    number: 7,
    projectTypes: [
      {
        type: ProjectTypeName.Angular,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
      {
        type: ProjectTypeName.Gatsby,
        isSelected: false,
        icon: ReactjsFillIcon,
      },
    ],
    shortDescription: "shortDescription,shortDescription,shortDescription",
  },
];
