const SingleProjectPage = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const { projectId } = params;
  //   console.log(projectId);

  const res = await fetch(`${process.env.BACKEND_URL}/projects/${projectId}`, {
    cache: "no-store",
  });
  const project = await res.json();
  console.log(project);

  return (
    <div>
      <h1>Single Project Page</h1>
    </div>
  );
};

export default SingleProjectPage;
