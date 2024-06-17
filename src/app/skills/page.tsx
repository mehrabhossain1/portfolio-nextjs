import Image from "next/image";

const SkillsPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/skills", {
    cache: "no-store",
  });
  console.log(res);
  const skills = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      {skills.map((skill: any) => (
        <>
          <Image
            key={skill._id}
            src={skill.image}
            width={50}
            height={50}
            alt={skill.title}
          />
          <p>{skill.title}</p>
        </>
      ))}
    </div>
  );
};

export default SkillsPage;
