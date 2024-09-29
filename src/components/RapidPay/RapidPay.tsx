'use client';

import React from 'react';
import styles from './rapidpay.module.scss';
import RubIcon from '../../../public/payment/rub-stand.svg';

const RapidPay: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [activeBtn, setActiveBtn] = React.useState<number | null>(null);

  const handleButtonClick = (value: string, index: number) => {
    setInputValue(value);
    setActiveBtn(index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className={styles.rapid}>
      <div className={styles.body}>
        <div className={styles.input}>
          <RubIcon className={styles.icon} width={20} height={20} />
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="200"
          />
        </div>
        <div className={styles.btns}>
          {['100₽', '200₽', '500₽', '2000₽'].map((value, index) => (
            <button
              key={index}
              className={`${styles.btn} ${activeBtn === index ? styles.active : ''}`}
              onClick={() => handleButtonClick(value.replace('₽', ''), index)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className={styles.replenishBtn}>
          <button>Пополнить</button>
        </div>
      </div>
    </div>
  );
};

export default RapidPay;
