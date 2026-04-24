import { getPosts } from "@/shared/api/getPosts.api";
import { getTranslations } from "next-intl/server";
import PostCard from "./post-card";
import { Post } from "@/types/post";
import styles from "../specialty-detail.module.scss";

export default async function RelatedPostsSection({
  searchKeys,
}: {
  searchKeys: string[];
}) {
  const [postsResponses, tSpecialty] = await Promise.all([
    Promise.all(
      searchKeys.map(key =>
        getPosts({
          subjectName: key,
          _limit: 12,
          _sort: "created_at:DESC",
        }).catch(err => {
          console.error(`RelatedPostsSection error for key "${key}":`, err);
          return [];
        })
      )
    ),
    getTranslations("specialty.detail").catch(() => null),
  ]);

  if (!tSpecialty) {
    return null;
  }

  // Aggregate and deduplicate
  const allPosts: Post[] = [];
  const seenPostIds = new Set<number>();

  if (postsResponses) {
    postsResponses.forEach(posts => {
      if (!posts) return;
      posts.forEach((post: Post) => {
        if (!seenPostIds.has(post.id)) {
          seenPostIds.add(post.id);
          allPosts.push(post);
        }
      });
    });
  }

  const posts = allPosts.slice(0, 12);

  if (posts.length === 0) {
    return (
      <div className={styles.det_emptyState}>
        {tSpecialty("noRelatedPosts")}
      </div>
    );
  }

  return (
    <div className={styles.det_relatedPostsSection}>
      <h2 className={styles.sect_sectionTitle}>{tSpecialty("relatedPosts")}</h2>
      <ul className={styles.det_postList}>
        {posts.map((post: Post) => (
          <li
            key={post.id}
            className={styles.det_postItem}
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
