'use client'

import React, { useState } from 'react';
import ThumbsUpIcon from '../../../public/reviews-main/thumb-up.svg';
import ThumbsDownIcon from '../../../public/reviews-main/thumb-down.svg';
import styles from './progress.module.scss';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const ProgressBars = () => {
  const [completed, setCompleted] = useState(0);

  const onVisibilityChange = (isVisible:any) => {
    if (isVisible) {
      setCompleted(80);
    }
  };

  return (
    <div className={styles.progress}>
      <div className={styles.stats}>
        <div className={styles.item}>
          <ThumbsUpIcon width={36} height={35} />
          <div className={styles.numberOne}>
            <CountUp end={274} duration={5} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </div>
        </div>
        <div className={styles.item}>
          <ThumbsDownIcon width={36} height={35} />
          <div className={styles.number}>
            <CountUp end={12} duration={5} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </div>
        </div>
      </div>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility delayedCall>
        <div className={styles.bar}>
          <div
            className={styles.barContainer}
            style={{
              position: 'relative',
              backgroundColor: '#364152',
              borderRadius: '12px',
              height: '8px',
              overflow: 'hidden',
            }}
          >
            <div
              className={styles.barCompleted}
              style={{
                backgroundColor: '#2ecc71',
                width: `${completed}%`,
                height: '100%',
                transition: 'width 0.5s ease-in-out',
              }}
            />
          </div>
        </div>
      </VisibilitySensor>
      <div className={styles.userStats}>
        <span className={styles.percent}>94%</span>
        пользователей довольны работоспособностью сервиса
      </div>
    </div>
  );
};

export default ProgressBars;
