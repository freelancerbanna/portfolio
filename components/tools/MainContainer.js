import { About, Contact, Footer, Home, Projects, Services, Work } from "..";
//
const MainContainer = () => {
  return (
    <>
      <main>
        <Home />

        <Services />
        <Work />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export { MainContainer };
