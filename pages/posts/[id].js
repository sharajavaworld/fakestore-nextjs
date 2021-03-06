import React from "react";
import { useRouter } from "next/router";

export default function Post({ postData }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading Page Data...</div>;
  }
  return (
    <div>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const postData = await res.json();
  return {
    props: {
      postData,
    },
  };
}
