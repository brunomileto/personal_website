import { BrowserRouter, HashRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header, Header2, Header3 } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Routes />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};
