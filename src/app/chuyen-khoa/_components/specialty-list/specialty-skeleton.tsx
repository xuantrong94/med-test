import React from "react";
import styles from "../../(specialty-list)/specialty-page.module.scss";

const SpecialtyListSkeleton = () => {
  // We'll show 21 items (3 rows of 7 columns on desktop)
  const skeletonItems = Array.from({ length: 21 });

  return (
    <div className={styles.skel_skeletonWrapper}>
      {/* Searchbar Mock Tĩnh để SSR - Không gây flicker như component thật */}
      <div className={styles.skel_searchbarStatic} />

      <div className='container'>
        <div className={styles.skel_specialtyGrid}>
          {skeletonItems.map((_, index) => (
            <div
              key={index}
              className={styles.skel_specialtyItemSkeleton}
            >
              <div className={styles.skel_iconSkeleton}></div>
              <div className={styles.skel_textSkeleton}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyListSkeleton;
