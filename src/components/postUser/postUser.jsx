import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${slug}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("something wemt wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
