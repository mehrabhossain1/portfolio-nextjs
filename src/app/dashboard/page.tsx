import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      <Link href="/dashboard/post-project">Post Project</Link>
      <Link href="/dashboard/post-skill">Post Skill</Link>
      <Link href="/dashboard/post-blog">Post Blog</Link>
    </div>
  );
};

export default DashboardPage;
