"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { data: session } = useSession();
  const [post, setPost] = useState({});
  const [updating, setIsUpdating] = useState(false);
  const searchParams = useSearchParams();
  const Id = searchParams.get("id");

  const router = useRouter();

  const handleFetch = async (Id) => {
    try {
      const res = await fetch(`api/prompt/${Id}`, {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetch(Id);
  }, [Id]);
  const updataPrompt = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const response = await fetch(`api/prompt/${Id}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
  };
  return (
    <div>
      <Form
        type="Updata"
        post={post}
        setPost={setPost}
        submitting={updating}
        handleSubmit={updataPrompt}
      />
    </div>
  );
}
