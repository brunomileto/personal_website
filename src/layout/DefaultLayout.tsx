import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "../components/Footer";

import { Header } from "../components/Header";
import { pages } from "../Router";

export function DefaultLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === pages.home.path;
  console.log(location.pathname);
  return (
    <div
      id="defaultLayout"
      className={`flex flex-col justify-between w-full h-[calc(100vh-35px)]
      rounded-lg border-1 border-lines bg-primary-marine  
      ${
        isHomePage && "bg-hero bg-no-repeat bg-left"
      } md:bg-right-top bg-cover md:bg-contain`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
