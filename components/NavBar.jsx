"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
export default function NavBar() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();

      setProviders(res);
    })();
  }, []);

  return (
    <nav className="justify-between flex items-center w-full mb-16 mt-5">
      <Link href="/" className="flex gap-2 items-center flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={40}
          height={40}
        />
        <p className=" text bg-gradient-to-r text-[18px] font-[900] from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          Blog Post
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          // {session ? (
          <div className="flex gap-3 md:gap-5 items-center">
            <Link
              href="/create-blog"
              className="rounded-full border border-black bg-black text-white  hover:bg-white barder-[1px] hover:text-black  font-[600] text-[18px] py-1 px-4"
            >
              Create Blog
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="rounded-full border border-black hover:bg-black hover:text-white font-[600] text-[18px] py-1 px-4"
            >
              Sign Out
            </button>
            {session?.user?.image && (
              <Link href="/profile">
                <Image
                  src={session?.user.image}
                  // src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="rounded-full border border-black bg-black text-white  hover:bg-white barder-[1px] hover:text-black  font-[600] text-[18px] py-1 px-4"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          // {session ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              // src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              // <div className="dropdown">
              <div className="absolute top-full right-0 bg-white px-3 py-4 mt-4 rounded flex flex-col  min-w-[160px] justify-end items-end gap-2">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-blog"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Blog
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="w-full mt-2 rounded-full border border-black bg-black text-white  hover:bg-white hover:text-black font-[600] text-[16px] py-1 px-6"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="rounded-full border border-black bg-black text-white  hover:bg-white barder-[1px] hover:text-black  font-[600] text-[18px] py-1 px-4"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}
