import { useRef, lazy, Suspense } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import ClipLoader from "react-spinners/ClipLoader";

const AboutMeNew = lazy(() => import("./components/AboutMeNew"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <ClipLoader size={100} />
        </div>
      }
    >
      <div className="bg-gradient-to-br from-slate-900 to-slate-500">
        <AboutMeNew scrollToProjects={scrollToProjects} />
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
