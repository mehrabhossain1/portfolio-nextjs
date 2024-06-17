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
  const res = await fetch(`http://localhost:5000/api/v1/projects`, {
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
