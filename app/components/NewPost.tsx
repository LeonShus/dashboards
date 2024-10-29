"use client";

import { useState } from "react";
import Router from "next/router";
import { UserApi } from "../api/users/users";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { name: title, email: content };

      fetch("/api/users/add-user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      body: JSON.stringify(body)
      });
      // Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitData}>
        <input
          type="text"
          placeholder="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="email"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default NewPost;
