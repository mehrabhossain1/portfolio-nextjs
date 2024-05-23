"use client";
import { TProject } from "@/app/projects/page";
import Image from "next/image";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import MotionButton from "@/components/Button/MotionButton";
import MotionButtonOutline from "@/components/Button/MotionButtonOutline";

const AllProjectsCard = ({ project }: { project: TProject }) => {
  return (
    <Card>
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="p-4">
        <Link href={`/projects/${project._id}`}>
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </Link>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex justify-between">
          <MotionButtonOutline>
            <Link
              href={project.liveSite}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </Link>
          </MotionButtonOutline>
          <div className="flex gap-2">
            <MotionButton>
              <Link
                href={project.clientGithub}
                className="btn mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend
              </Link>
            </MotionButton>
            <MotionButton>
              <Link
                href={project.serverGithub}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend
              </Link>
            </MotionButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AllProjectsCard;
