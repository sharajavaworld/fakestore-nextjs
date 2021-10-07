import React from 'react';
import Link from "next/link";

export default function Posts({posts}) {
    return(
        <ul>
            {posts.map((post) => {
               return(
                    <li key="{post.id}">
                        <h3>
                            <Link href="/posts/[id]" as={"/posts/" + post.id}>
                            <a> {post.title}</a>
                            </Link>
                        </h3>
                        <p>{post.body}</p>
                    </li>
               );
            })}
        </ul>
    );
}
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return {
        props : {
            posts
        }
    }
}