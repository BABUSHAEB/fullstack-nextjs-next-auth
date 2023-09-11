"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const PromptCard = ({
  post,
  handleEdit,
  handleDelete,
  handleTagClick,
  openDialog,
  setOpenDialog,
  hasConfirmed,
  setHasConfirmed,
}) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (post.creater._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creater._id}?name=${post.creater.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <div className="prompt_card ">
        <div className="flex justify-between items-start gap-5">
          <div
            className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
            onClick={handleProfileClick}
          >
            <Image
              src={post.creater?.image}
              alt="user_image"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />

            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post?.creater?.username}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                {post?.creater?.email}
              </p>
            </div>
          </div>
        </div>

        <p className="my-4 font-satoshi text-[16px] font-bold  text-gray-700">
          {post.blogtitle}
        </p>
        {/* <div dangerouslySetInnerHTML={{ __html: postblogdetails }} /> */}

        <div className="flex justify-between items-center">
          <p
            className="font-inter text-sm blue_gradient cursor-pointer"
            onClick={() => handleTagClick && handleTagClick(post.tag)}
          >
            #{post.tag}
          </p>
          <Link href={`/blogs/${post.slug}`}>
            <button className=" bg-orange-500 rounded-xl px-3 py-2 font-inter text-sm text-white  cursor-pointer">
              View Blog
            </button>
          </Link>
        </div>

        {session?.user?.id === post?.creater?._id &&
          pathName === "/profile" && (
            <div className="mt-5 flex  items-center gap-4 border-t border-gray-100 pt-3">
              <p
                className="font-inter text-sm bg-green-500 text-white px-4 py-[6px] rounded-md cursor-pointer"
                onClick={handleEdit}
              >
                Edit
              </p>
              <p
                className="font-inter text-sm bg-orange-500 text-white px-4 py-[6px] rounded-md cursor-pointer"
                onClick={handleDelete}
              >
                Delete
              </p>
            </div>
          )}
      </div>
      {openDialog && (
        <div className="rounded-md w-[80vw]  md:w-[380px] shadow-xl  absolute top-[50%] mx-auto my-auto  bg-white">
          <div className="py-7 px-7  flex-col  justify-start">
            <h1 className="text-[17px] md:font-bold">
              Are you sure you want to delete this prompt?
            </h1>
            <div className="mt-5 flex  items-center  gap-4 ">
              <p
                className="font-inter text-sm bg-green-500 text-white px-4 py-[6px] rounded-md cursor-pointer"
                onClick={() => setHasConfirmed((prev) => !prev)}
              >
                Delete
              </p>
              <p
                className="font-inter text-sm bg-orange-500 text-white px-4 py-[6px] rounded-md cursor-pointer"
                onClick={() => setOpenDialog((prev) => !prev)}
              >
                Cancel
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromptCard;
