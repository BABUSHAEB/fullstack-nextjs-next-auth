// "use client";

import React from "react";

function BlogsDetails({ BlogsDetails = {} }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[19px] font-[600] capitalize">
          {BlogsDetails.blogtitle}
        </h1>
        <h3>By</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: BlogsDetails.blogdetails }} />
    </div>
  );
}

export default BlogsDetails;
