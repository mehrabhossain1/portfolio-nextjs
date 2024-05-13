"use client";
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
      const response = await fetch(
        `https://portfolio-server-taupe-sigma.vercel.app/api/v1/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image">Image:</label>
        <br />
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="liveSite">Live Site:</label>
        <br />
        <input
          type="text"
          id="liveSite"
          name="liveSite"
          value={formData.liveSite}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="clientGithub">Client Github:</label>
        <br />
        <input
          type="text"
          id="clientGithub"
          name="clientGithub"
          value={formData.clientGithub}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="serverGithub">Server Github:</label>
        <br />
        <input
          type="text"
          id="serverGithub"
          name="serverGithub"
          value={formData.serverGithub}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Post Project</button>
      </form>
    </div>
  );
};

export default PostProjectPage;
