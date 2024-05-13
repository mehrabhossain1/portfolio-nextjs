import MotionButtonOutline from "@/components/Button/MotionButtonOutline";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex justify-center mt-5 space-x-2">
      <MotionButtonOutline>
        <Link href="/dashboard/post-project">Post Project</Link>
      </MotionButtonOutline>

      <MotionButtonOutline>
        <Link href="/dashboard/post-skill">Post Skill</Link>
      </MotionButtonOutline>

      <MotionButtonOutline>
        <Link href="/dashboard/post-blog">Post Blog</Link>
      </MotionButtonOutline>
    </div>
  );
};

export default DashboardPage;
