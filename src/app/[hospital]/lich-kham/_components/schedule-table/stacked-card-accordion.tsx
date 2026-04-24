"use client";

import React, { useState } from "react";
import styles from "./stacked-card-accordion.module.scss";

export interface AccordionItem {
  /** Uniquely identifies the accordion section */
  id: string;
  /** The clickable header content (Feature Name) */
  featureName: React.ReactNode;
  /** The list of cards or content to render when expanded */
  children: React.ReactNode;
}

interface StackedCardAccordionProps {
  /** Array of items to be displayed as accordion sections */
  items: AccordionItem[];
  /** The ID of the section that should be open by default */
  defaultOpenId?: string;
  /** Optional controlled ID for the currently open section */
  openId?: string | null;
  /** Optional callback fired when a section header is clicked */
  onToggle?: (_id: string | null) => void;
  /** Optional container class */
  className?: string;
}

/**
 * StackedCardAccordion (Experimental)
 * A standalone accordion component optimized for mobile devices.
 * Features:
 * - Single-open logic: expanding one section collapses the others.
 * - Sticky headers: feature name sticks to the top during scroll.
 * - Client component: optimized for interactive state in Next.js.
 */
export const StackedCardAccordion: React.FC<StackedCardAccordionProps> = ({
  items,
  defaultOpenId,
  openId: controlledOpenId,
  onToggle,
  className = "",
}) => {
  const [internalOpenId, setInternalOpenId] = useState<string | null>(
    defaultOpenId || null
  );

  const isControlled = controlledOpenId !== undefined;
  const currentOpenId = isControlled ? controlledOpenId : internalOpenId;

  const toggleItem = (id: string) => {
    if (isControlled && onToggle) {
      onToggle(currentOpenId === id ? null : id); // Or however single-open dictates (it should allow full collapse if same id is clicked)
    } else {
      setInternalOpenId(prev => (prev === id ? null : id));
    }
  };

  return (
    <div className={`${styles.accordionContainer} ${className}`}>
      {items.map(item => {
        const isOpen = currentOpenId === item.id;

        return (
          <div
            key={item.id}
            className={`${styles.accordionSection} ${
              isOpen ? styles.isOpen : ""
            }`}
          >
            {/* Sticky Header */}
            <button
              type='button'
              className={styles.accordionHeader}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <div className={styles.headerContent}>{item.featureName}</div>
              <div className={styles.headerIcon}>
                <svg
                  className={styles.chevron}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  <polyline points='6 9 12 15 18 9' />
                </svg>
              </div>
            </button>

            {/* Body */}
            <div
              className={styles.accordionBodyWrapper}
              aria-hidden={!isOpen}
            >
              <div className={styles.accordionBodyInner}>
                {/* A padding wrapper for the children */}
                <div className={styles.accordionContent}>{item.children}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
