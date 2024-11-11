import Hero from "./pages/Hero";
import WhatWeDo from "./pages/WhatWeDo";
import About from "./pages/About";
import JobList from "./pages/JobList";
import HowThose from "./pages/HowThose";
import DisCover from "./pages/DisCover";
import JobOpening from "./pages/JobOpening";
import FooterHero from "./pages/FooterHero";

// Footer
function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden items-center ">
      <Hero />
      <WhatWeDo />
      <div>
        <About />
        <div className="mt-4">
          <JobList />
        </div>
        <HowThose />
        <DisCover />
        <div className="m-[0.27rem] mt-8 md:mx-8">
          <JobOpening />
        </div>
        <div className="m-[0.27rem] mt-8 md:mx-8">
          <FooterHero />
        </div>
      </div>
    </div>
  );
}

export default Home;
