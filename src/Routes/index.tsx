import { Routes as RoutesDOM, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Project } from "../pages/Project";
import { Projects } from "../pages/Projects";
import { paths } from "../types/path";

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path={paths.home.path} element={<Home />} />
      <Route path={paths.contact.path} element={<Contact />} />
      <Route path={paths.about.path} element={<About />} />
      <Route path={paths.projects.path} element={<Projects />} />
      <Route path={paths.project.path} element={<Project />} />
    </RoutesDOM>
  );
};
