import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Ghost } from "lucide-react";
import { SpeechBubble, Starburst } from "@/components/comic/ComicKit";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="container-x grid min-h-[70vh] place-items-center py-16">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto mb-6 w-fit">
          <Starburst className="h-40 w-40 rotate-[-8deg]" color="var(--yellow)" textClassName="text-4xl" wobble>
            404
          </Starburst>
        </div>

        <h1 className="display text-4xl leading-[0.9] title-ink sm:text-5xl">
          This page walked
          <br /> into the multiverse
        </h1>

        <div className="mx-auto mt-8 max-w-md">
          <SpeechBubble>
            <p className="text-[15px] font-bold">
              <span className="font-type text-xs uppercase tracking-widest">Route not found:</span>
              <br />
              <code className="break-all">{location.pathname}</code>
              <br />
              Either the link is broken, or the page eloped with my semicolons. Both happen.
            </p>
          </SpeechBubble>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-comic btn-red">
            <ArrowLeft size={17} /> Back to issue #01
          </Link>
          <Link to="/projects" className="btn-comic btn-sm btn-paper">
            <Ghost size={15} /> Haunt the projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
