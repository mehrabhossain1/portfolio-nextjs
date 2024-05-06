import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faGithub,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faServer,
  faCloudUploadAlt,
  faUserFriends,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const SkillsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <SkillIcon icon={faHtml5} label="HTML" />
        <SkillIcon icon={faCss3Alt} label="CSS" />
        <SkillIcon icon={faJs} label="JavaScript" />
        <SkillIcon icon={faReact} label="React" />
        <SkillIcon icon={faBootstrap} label="Bootstrap" />
        <SkillIcon icon={faNodeJs} label="Node.js" />
        <SkillIcon icon={faServer} label="Firebase" />
        <SkillIcon icon={faDatabase} label="MongoDB" />
        <SkillIcon icon={faCode} label="JWT" />
        <SkillIcon icon={faCloudUploadAlt} label="imgBB" />
        <SkillIcon icon={faCloudUploadAlt} label="Cloudinary" />
        <SkillIcon icon={faNodeJs} label="Stripe" />
        <SkillIcon icon={faCodeBranch} label="Typescript" />
        <SkillIcon icon={faDatabase} label="Mongoose" />
        <SkillIcon icon={faServer} label="Express.js" />
        <SkillIcon icon={faUserFriends} label="Tanstack Query" />
        <SkillIcon icon={faServer} label="Redux" />
        <SkillIcon icon={faServer} label="RTK-Query" />
        <SkillIcon icon={faServer} label="Next.js" />
        <SkillIcon icon={faServer} label="NextAuth" />
        <SkillIcon icon={faServer} label="PostgreSQL" />
      </div>
    </div>
  );
};

interface SkillIconProps {
  icon: any; // or specify the exact type of the icon
  label: string;
}

const SkillIcon = ({ icon, label }: SkillIconProps) => {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={icon} className="text-4xl mr-2 w-6 text-sky-400" />
      <span>{label}</span>
    </div>
  );
};

export default SkillsPage;
