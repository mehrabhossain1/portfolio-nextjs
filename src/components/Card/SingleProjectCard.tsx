import { TProject } from "@/app/projects/page";
import Image from "next/image";

const SingleProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-3xl font-semibold mb-4">{project.title}</h1>
        <div className="mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        <p className="text-lg font-semibold mb-2">
          Description: {project.description}
        </p>
      </div>
    </div>
  );
};

export default SingleProjectCard;
