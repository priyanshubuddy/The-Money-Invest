/* eslint-disable */

import React from "react";
import { getRecentNewsPosts} from "../services";
import { getTrendingNewsPosts } from "../services";
import NewsPostCard from "../components/News-components/NewsPostCard";
import PopularNews from "../components/News-components/PopularNews";
import TopNews from "../components/News-components/TopNews";
import RecentNews from "../components/News-components/RecentNews";
import TrendingNews from "../components/News-components/TrendingNews";

// function NewsSection() {
export default function News() {
  return (
    <>
        <title>News</title>
    <div
      className="max-md:mx-8"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* -------------------------------Top Section start------------------------------  */}
      <h1 className="border-black border-y-2 my-4   ">Top News</h1>
      <div className="container">
        <TopNews />
      </div>

      {/* /* ----------------------------- Top Section End ----------------------------  */}

      {/* /* -------------------------- Second Section Start --------------------------  */}

      <div
        style={
          {
            // width: "1250px",
            //   height: "450px",
          }
        }
        className="container items-center border-solid border-b-2 border-black mb-4 pb-4"
      >
        <div className="NewsSection2  mt-4 ">
          <div className="mr-4 NewsBoxType2 ">
            <h1 className="border-black border-y-2 my-2 bg-white rounded-xl">
              Recent News
            </h1>
            {/* {recentnewsposts.map((post, index) => (
              <NewsPostCard key={index} post={post.node} />
            ))} */}
            <RecentNews />
          </div>

          <div className="mr-4 NewsBoxType1">
            <h1 className="border-black border-y-2 my-2 bg-white rounded-xl">
              Popular News
            </h1>
            <div className="row grid grid-cols-12 gap-2">
              <PopularNews />
            </div>
          </div>

          <div className="NewsBoxType2">
            <h1 className="border-black border-y-2 my-2 bg-white rounded-xl">
              Trending News
            </h1>
            {/* {trendingnewsposts.map((post, index) => (
              <NewsPostCard key={index} post={post.node} />
            ))} */}
            <TrendingNews />
          </div>
        </div>
      </div>

      {/* --------------------------- Second Section End ---------------------------  */}

      {/*  --------------------------- Third Section Start --------------------------  */}

      {/* <div
        style={{
          width: "1250px",
          height: "420px",
        }}
        className=" justify-center my-4 bg-gray-200 "
      >
        <h1 className="border-black border-y-2 mb-2 h-min  ">Global News</h1>
        <NewsApp/>
      </div> */}

      {/* --------------------------- Third Section End -------------------------- */}
    </div>
    </>
  );
}

// export async function getStaticProps() {
//   const recentnewsposts = (await getRecentNewsPosts()) || [];
//   const trendingnewsposts = (await getTrendingNewsPosts()) || []; // add this line
//   return {
//     props: {
//       recentnewsposts,
//       trendingnewsposts, // add this line
//     },
//   };
// }

