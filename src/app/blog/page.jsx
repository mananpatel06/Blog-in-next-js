"use client"
import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

const getData = async () => {
  // {cache: "no-store"} by default its force-cache it cache data but if data is changing 
  // use no-store so each time it fetch data

  // next:{revalidate:3600} validate data after 3600sec = 1 hour

  const res = await fetch("http://localhost:3000/api/blog", 
  {
    // cache: "no-store"
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("something wemt wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  // api call
  // const posts = await getData();

  
  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;