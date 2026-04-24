import React from "react";
import Image from "next/image";
import styles from "../specialty-detail.module.scss";
import ExpandableWrapper from "./expandable-wrapper";

interface ContentBlock {
  type: string;
  children?: ContentChild[];
  level?: number;
  format?: string;
  url?: string;
  alt?: string;
  image?: {
    url: string;
    alternativeText?: string | null;
    width?: number;
    height?: number;
    caption?: string | null;
    formats?: {
      small?: { url: string; width: number; height: number };
      thumbnail?: { url: string; width: number; height: number };
    };
  };
}

interface ContentChild {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string;
  children?: ContentChild[];
}

interface ContentRendererProps {
  content: ContentBlock[] | string;
  maxHeight?: number;
}

const renderChildren = (children: ContentChild[]): React.ReactNode => {
  return children.map((child, index) => {
    if (child.type === "text") {
      let element: React.ReactNode = <span key={index}>{child.text}</span>;

      if (child.bold) element = <strong key={index}>{child.text}</strong>;
      if (child.italic) element = <em key={index}>{element}</em>;
      if (child.underline) element = <u key={index}>{element}</u>;
      if (child.strikethrough) element = <s key={index}>{element}</s>;
      if (child.code) element = <code key={index}>{child.text}</code>;

      return element;
    }

    if (child.type === "link") {
      return (
        <a
          key={index}
          href={child.url}
          className={styles.cont_link}
        >
          {child.children ? renderChildren(child.children) : child.text}
        </a>
      );
    }

    if (child.children) {
      return <span key={index}>{renderChildren(child.children)}</span>;
    }

    return null;
  });
};

const renderBlock = (block: ContentBlock, index: number, content: ContentBlock[] | string): React.ReactNode => {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className={styles.cont_paragraph}
        >
          {block.children ? renderChildren(block.children) : ""}
        </p>
      );

    case "heading": {
      const HeadingTag =
        `h${block.level || 1}` as keyof React.JSX.IntrinsicElements;
      return (
        <HeadingTag
          key={index}
          className={styles.cont_heading}
        >
          {block.children ? renderChildren(block.children) : ""}
        </HeadingTag>
      );
    }

    case "list": {
      const ListTag = block.format === "ordered" ? "ol" : "ul";
      return (
        <ListTag
          key={index}
          className={styles.cont_list}
        >
          {block.children?.map((child, childIndex) => (
            <li
              key={childIndex}
              className={styles.cont_listItem}
            >
              {child.children
                ? renderChildren(child.children)
                : (child as ContentChild).text || ""}
            </li>
          ))}
        </ListTag>
      );
    }

    case "list-item":
      return (
        <li
          key={index}
          className={styles.cont_listItem}
        >
          {block.children ? renderChildren(block.children) : ""}
        </li>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className={styles.cont_quote}
        >
          {block.children ? renderChildren(block.children) : ""}
        </blockquote>
      );

    case "code":
      return (
        <pre
          key={index}
          className={styles.cont_codeBlock}
        >
          <code>{block.children ? renderChildren(block.children) : ""}</code>
        </pre>
      );

    case "image": {
      if (!block.image?.url) {
        return null;
      }

      const imageWidth = block.image.width || 800;
      const imageHeight = block.image.height || 600;
      const imageUrl = block.image.url.startsWith("http")
        ? block.image.url
        : `https://dev-strapi.medpro.com.vn${block.image.url}`;

      const isFirstImage = Array.isArray(content) 
        ? content.findIndex(b => b.type === "image") === index 
        : false;

      return (
        <div
          key={index}
          className={styles.cont_imageWrapper}
        >
          <Image
            src={imageUrl}
            alt={block.image.alternativeText || block.image.caption || ""}
            width={imageWidth}
            height={imageHeight}
            className={styles.cont_image}
            fetchPriority={isFirstImage ? 'high' : 'auto'}
            loading={isFirstImage ? 'eager' : 'lazy'}
          />
        </div>
      );
    }

    default:
      return (
        <div
          key={index}
          className={styles.cont_unknownBlock}
        >
          {block.children ? renderChildren(block.children) : ""}
        </div>
      );
  }
};

const ContentRenderer: React.FC<ContentRendererProps> = ({
  content,
  maxHeight = 400,
}) => {
  if (typeof content === "string") {
    return (
      <ExpandableWrapper maxHeight={maxHeight}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ExpandableWrapper>
    );
  }

  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <ExpandableWrapper maxHeight={maxHeight}>
      {content.map((block, index) => renderBlock(block, index, content))}
    </ExpandableWrapper>
  );
};

export default ContentRenderer;
