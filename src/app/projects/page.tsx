import Image from "next/image";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import MotionButton from "@/components/Button/MotionButton";
import MotionButtonOutline from "@/components/Button/MotionButtonOutline";
import AllProjectsCard from "@/components/Card/AllProjectsCard";

export type TProject = {
  _id: string;
  title: string;
  description: string;
  image: string;
  liveSite: string;
  clientGithub: string;
  serverGithub: string;
};

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    cache: "no-store",
  });
  const projects = await res.json();
  // console.log(projects);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {projects.map((project: TProject) => (
        <AllProjectsCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
