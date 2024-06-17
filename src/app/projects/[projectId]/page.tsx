import SingleProjectCard from "@/components/Card/SingleProjectCard";

const SingleProjectPage = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const { projectId } = params;
  //   console.log(projectId);

  const res = await fetch(
    `http://localhost:5000/api/v1/projects/${projectId}`,
    {
      cache: "no-store",
    }
  );
  const project = await res.json();
  console.log(project);

  return (
    <div>
      <SingleProjectCard project={project} />
    </div>
  );
};

export default SingleProjectPage;
