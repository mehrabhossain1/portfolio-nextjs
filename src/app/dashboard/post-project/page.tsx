"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PostProjectPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    liveSite: "",
    clientGithub: "",
    serverGithub: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/v1/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Project data posted successfully");
        // Optionally, you can reset the form after successful submission
        setFormData({
          title: "",
          description: "",
          image: "",
          liveSite: "",
          clientGithub: "",
          serverGithub: "",
        });

        router.push("/projects");
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
        Post A Project
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
        <label htmlFor="description" className="block">
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
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
        <label htmlFor="liveSite" className="block">
          Live Site:
        </label>
        <input
          type="text"
          id="liveSite"
          name="liveSite"
          value={formData.liveSite}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        <label htmlFor="clientGithub" className="block">
          Client Github:
        </label>
        <input
          type="text"
          id="clientGithub"
          name="clientGithub"
          value={formData.clientGithub}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        <label htmlFor="serverGithub" className="block">
          Server Github:
        </label>
        <input
          type="text"
          id="serverGithub"
          name="serverGithub"
          value={formData.serverGithub}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        <Button
          type="submit"
          className="font-semibold transition-all bg-transparent text-sky-400 border-1 border-sky-400 hover:bg-sky-500 hover:text-white"
        >
          Post Project
        </Button>
      </form>
    </div>
  );
};

export default PostProjectPage;
