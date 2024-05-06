import Image from "next/image";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import MotionButton from "@/components/Button/MotionButton";
import MotionButtonOutline from "@/components/Button/MotionButtonOutline";

const projects = [
  {
    id: 1,
    title: "GadgetGrove",
    description:
      "A full-stack e-commerce website built with Next.js, featuring user authentication, product management, shopping cart functionality, and secure payment processing.",
    image: "/gadgetgrove.png",
    liveSite: " https://ass-8-client.vercel.app", // Add live site URL
    clientGithub: "https://github.com/mehrabhossain1/assignment-8-client", // Add client-side GitHub URL
    serverGithub: "https://github.com/server/project1", // Add server-side GitHub URL
  },
  {
    id: 2,
    title: "UnityAid",
    description:
      "A Donation platform developed using the MERN stack, allowing users to create profiles, connect with friends, share posts, and interact through comments and likes.",
    image: "/unityaid.png",
    liveSite: "https://startling-seahorse-4904d4.netlify.app", // Add live site URL
    clientGithub: "https://github.com/mehrabhossain1/assignment-7-client", // Add client-side GitHub URL
    serverGithub: "https://github.com/server/project2", // Add server-side GitHub URL
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {projects.map((project) => (
        <Card key={project.id}>
          <div className="relative h-48">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
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
      ))}
    </div>
  );
};

export default ProjectsPage;
