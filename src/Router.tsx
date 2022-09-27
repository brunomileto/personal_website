import { Route, Routes } from "react-router";
import { DefaultLayout } from "./layout/DefaultLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

export const pages = {
  home: { name: "_home", path: "/" },
  about: { name: "_about", path: "/about" },
  projects: { name: "_projects", path: "/projects" },
  contact: { name: "_contact", path: "/contact" },
};

export function Router() {
  return (
    <Routes>
      <Route path={pages.home.path} element={<DefaultLayout />}>
        <Route path={pages.home.path} element={<Home />} />
        <Route path={pages.about.path} element={<About />} />
        <Route path={pages.contact.path} element={<Contact />} />
        {/* <Route /> */}
      </Route>
    </Routes>
  );
}
