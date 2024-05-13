"use client";
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
      const response = await fetch(`http://localhost:5000/api/v1/skills`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
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

        <button type="submit">Post Project</button>
      </form>
    </div>
  );
};

export default PostSkillPage;
