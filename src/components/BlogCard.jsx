import React from "react";
import { useNavigate } from "react-router";
import { usePosts } from "../context/PostsContext";

function BlogCard() {
  const navigate = useNavigate();
  const {posts} = usePosts();


  return (
    <>
      {posts.length > 0
        ? posts.map((post, index) => (
            <div
              class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 pointer bg-white"
              onClick={() => {
                navigate(`/post/${post.id}`);
              }}
              key={index}
            >
           <div className="image-container">
           <img
                class="w-full"
                src={post.image}
                alt="Mountain"
              />
           </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{post.title}</div>
                <p class="text-gray-700 text-base"  dangerouslySetInnerHTML={{ __html: post.body.slice(0, 250) + "... <p class='text-indigo-700 text-underline'>Read More<p>"}}>
                 
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{post.tag || 'News'}
                </span>
               
              </div>
            </div>
          ))
        : ""}
    </>
    // </div>
  );
}

export default BlogCard;
