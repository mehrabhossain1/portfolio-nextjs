"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PostSkillPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://portfolio-server-taupe-sigma.vercel.app/api/v1/skills`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Skill data posted successfully");
        // Optionally, you can reset the form after successful submission
        setFormData({
          title: "",
          image: "",
        });

        router.push("/skills");
      } else {
        console.error("Failed to post project data");
      }
    } catch (error) {
      console.error("Error posting project data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-3xl font-semibold mb-4 text-center text-sky-400">
        Post A Skill
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="title" className="block">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />

        <label htmlFor="image" className="block">
          Image:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />

        <Button
          type="submit"
          className="font-semibold transition-all bg-transparent text-sky-400 border-1 border-sky-400 hover:bg-sky-500 hover:text-white"
        >
          Post Skill
        </Button>
      </form>
    </div>
  );
};

export default PostSkillPage;
