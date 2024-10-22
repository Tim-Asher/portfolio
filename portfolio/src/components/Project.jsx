import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col gap-3 p-3 m-3 items-center rounded-xl bg-gray-700/30 drop-shadow-2xl border border-gray-500 shadow-lg text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300">
      <div>
        <LazyLoadImage
          className="flex justify-center w-full  h-80 object-cover rounded-xl object-top shadow-xl"
          alt={project.title}
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          src={project.image}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between h-full items-center gap-3">
        <p className="text-4xl text-center font-bold">{project.title}</p>
        <p className="text-xl text-center max-w-[80%] ">
          {trimDescription(project.description, 200)}
        </p>
        <a
          href={project.link}
          target="_blank"
          className="p-2 border rounded-md hover:bg-gray-500/30"
        >
          More Info
        </a>
      </div>
    </div>
  );
};

function trimDescription(description, maxLength) {
  if (description.length > maxLength) {
    const trimmedText = description.slice(0, maxLength);

    let nextSpaceIndex = description.indexOf(" ", maxLength);
    if (description[nextSpaceIndex - 1] == ",") {
      nextSpaceIndex -= 2;
    }

    return nextSpaceIndex !== -1
      ? description.slice(0, nextSpaceIndex) + " ..."
      : trimmedText + " ...";
  }

  return description;
}

export default Project;
