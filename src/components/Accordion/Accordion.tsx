'use client'

import React, { useRef, useEffect, useState } from 'react';
import styles from './accordion.module.scss';
import ArrDownIcon from '../../../public/faq/arr-down.svg';
import WarningIcon from '../../../public/faq/warning.svg';

interface AccordionProps {
  question: string;
  answer: string;
  showWarningIcon?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer, showWarningIcon = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [accordionOpen]);

  return (
    <div className={`${styles.accordion} ${accordionOpen ? styles.open : ''}`}>
      <button onClick={toggleAccordion} className={styles.btn}>
        {showWarningIcon && <WarningIcon className='icon' width={35} height={35} />} {/* Conditionally render the icon */}
        <span className={styles.header}>{question}</span>
        <div className={`${styles.add} ${accordionOpen ? styles.rotated : ''}`}>
          <ArrDownIcon className={styles.arr} width={10} height={12} />
        </div>
      </button>
      <div
        ref={contentRef}
        className={`${styles.content} ${accordionOpen ? styles.contentOpen : ''}`}
        style={{ maxHeight: accordionOpen ? `${contentHeight}px` : '0px' }}
      >
        <div className={styles.answer}>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
