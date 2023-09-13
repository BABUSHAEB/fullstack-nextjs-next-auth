import Loading from "@app/loading";
import Image from "next/image";
import Link from "next/link";

function BlogsDetails({ blogsDetails = {} }) {
  // const blogData = await getDetails(slug);
  let loading = false;
  loading = setTimeout(() => {
    return !loading;
  }, 5000);

  return (
    <>
      {loading ? (
        <div className="  mx-[auto]   w-full mb-16 mt-5">
          <div className="px-0 md:px-24">
            <div>
              <h1 className="text-[24px] md:text-[36px] font-[800] normal-case">
                {blogsDetails.blogtitle}
              </h1>
              <Link
                href={`/profile/${blogsDetails?.creater?._id}?name=${blogsDetails?.creater?.username}`}
              >
                <div className="flex-1 py-4 flex justify-start items-center gap-3 cursor-pointer">
                  <Image
                    src={blogsDetails.creater?.image}
                    alt="user_image"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                  />

                  <div className="flex flex-col">
                    <h3 className="font-satoshi font-semibold text-gray-900">
                      {blogsDetails?.creater?.username}
                    </h3>
                    {/* <p className="font-inter text-sm text-gray-500">
                    {blogsDetails?.creater?.email}
                  </p> */}
                  </div>
                </div>
              </Link>
            </div>
            {blogsDetails?.blogdetails && (
              <div
                className=" blogDetails"
                dangerouslySetInnerHTML={{ __html: blogsDetails.blogdetails }}
              />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default BlogsDetails;
