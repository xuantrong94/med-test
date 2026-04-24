"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar } from "lucide-react";
import styles from "../../specialty-detail.module.scss";
import { Post } from "@/types/post";
import { env } from "@/config";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const imageObj = post.image?.[0];

  const getFullImageUrl = (url: string | undefined) => {
    if (!url) return "/images/placeholder.webp";
    if (url.startsWith("http")) return url;
    // Ensure one leading slash and no trailing slash in baseURL if needed
    const baseUrl = env.cms.baseURL.endsWith("/")
      ? env.cms.baseURL.slice(0, -1)
      : env.cms.baseURL;
    const path = url.startsWith("/") ? url : `/${url}`;
    return `${baseUrl}${path}`;
  };

  const imageUrl = getFullImageUrl(
    imageObj?.formats?.thumbnail?.url || imageObj?.url
  );
  const authorName =
    post.authorDisplay?.createAuthorName || post.author || "Medpro";

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Link
      href={`https://medpro.vn/tin-tuc/${post.slug}`}
      className={styles.post_card}
    >
      <div className={styles.post_thumbWrapper}>
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className={styles.post_thumb}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className={styles.post_content}>
        <h3 className={styles.post_title}>{post.title}</h3>
        <p className={styles.post_description}>
          {post.metaDescription || post.description}
        </p>

        {post.subjectName && (
          <div className={styles.post_subjectChip}>{post.subjectName}</div>
        )}

        <div className={styles.post_footer}>
          <div className={styles.post_footerItem}>
            <User
              size={14}
              className={styles.post_icon}
            />
            <span>{authorName}</span>
          </div>
          <div className={styles.post_footerItem}>
            <Calendar
              size={14}
              className={styles.post_icon}
            />
            <span>{formatDate(post.published_at || post.created_at)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
