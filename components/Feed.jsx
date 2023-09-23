"use client";

import { useState, useEffect, lazy } from "react";

import PromptCard from "./PromptCard";
import Loading from "@app/loading";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-6">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = ({ allPosts }) => {
  // const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader((prev) => !prev);
    }, 3000);
  }, []);

  const filterPrompts = (searchtext) => {
    let regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.tag) ||
        regex.test(item?.creater?.email) ||
        regex.test(item.blogtitle) ||
        regex.test(item.slug) ||
        regex.test(item.blogdetails)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };
  return (
    <section className="feed mb-7">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="shadow-xl w-full py-2 px-3 border border-red-500 focus:outline-none rounded-full border-none"
        />
      </form>
      {/* {loader ? ( */}
      <>
        {/* All Prompts */}
        {searchText ? (
          <PromptCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
        )}
      </>
      {/* // ) : (
      //   <Loading />
      // )
      
      } */}
    </section>
  );
};

export default Feed;
