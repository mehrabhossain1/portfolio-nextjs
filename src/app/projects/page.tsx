import Image from "next/image";
import { Card } from "@nextui-org/react";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website built with the MERN stack, featuring user authentication, product management, shopping cart functionality, and secure payment processing.",
    image: "/project1.jpg", // Replace with your image URL or import images
  },
  {
    id: 2,
    title: "Social Networking App",
    description:
      "A social networking platform developed using the MERN stack, allowing users to create profiles, connect with friends, share posts, and interact through comments and likes.",
    image: "/project2.jpg",
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
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
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsPage;
