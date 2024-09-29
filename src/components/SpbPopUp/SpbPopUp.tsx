import React, { useState, useEffect, useRef } from 'react';
import styles from './popup.module.scss';
import Image from 'next/image';
import SpbIcon from '../../../public/popup/sbp.svg';
import InProcessIcon from '../../../public/popup/inProcess.svg';
import InProcessIconMob from '../../../public/popup/inProcess.svg';
import SearchIcon from '../../../public/popup/search.svg';
import SberIcon from '../../../public/popup/sber.svg';
import TinIcon from '../../../public/popup/tin.svg';
import VtbIcon from '../../../public/popup/vtb.svg';
import AlfaIcon from '../../../public/popup/a.svg';
import RayfIcon from '../../../public/popup/rayf.svg';
import OpenIcon from '../../../public/popup/open.svg';
import GazIcon from '../../../public/popup/gaz.svg';
import SovIcon from '../../../public/popup/sov.svg';
import PciIcon from '../../../public/popup/pci.svg';
import VisaIcon from '../../../public/popup/visa.svg';
import MirIcon from '../../../public/popup/mir.svg';
import MasterIcon from '../../../public/popup/master.svg';
import CloseIcon from '../../../public/popup/close.svg';
import CloseIconMobile from '../../../public/popup/close.svg';

interface SpbPopUpProps {
  onClose: () => void;
}

const SpbPopUp: React.FC<SpbPopUpProps> = ({ onClose }) => {
  const [activeBank, setActiveBank] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const banks = [
    { id: 'sber', icon: <SberIcon width={20} height={20} />, name: 'Сбербанк' },
    { id: 'tin', icon: <TinIcon width={20} height={20} />, name: 'Т-Банк' },
    { id: 'vtb', icon: <VtbIcon width={20} height={20} />, name: 'ВТБ' },
    { id: 'alfa', icon: <AlfaIcon width={20} height={20} />, name: 'Альфа-банк' },
    { id: 'rayf', icon: <RayfIcon width={20} height={20} />, name: 'Райффайзенбанк' },
    { id: 'open', icon: <OpenIcon width={20} height={20} />, name: 'Открытие' },
    { id: 'gaz', icon: <GazIcon width={20} height={20} />, name: 'Газпромбанк' },
    { id: 'sov', icon: <SovIcon width={20} height={20} />, name: 'Совкомбанк' },
  ];

  const handleBankClick = (id: string) => {
    setActiveBank(id);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.popup} ref={popupRef}>
        <div className={styles.mobileBack}>
          <div onClick={onClose} className={styles.mobileBackWrap}>
            <span>Назад</span>
            <CloseIconMobile width={18} height={18} className={styles.closeMobile} />
          </div>
        </div>
        <div className={styles.spb}>
          <div className={styles.iconWrap}><SpbIcon className={styles.spbIcon} width={80} height={40} /></div>
          <CloseIcon width={18} height={18} className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.body}>
          <div className={styles.qr}>
            <div className={styles.image}>
              <Image src='/popup/qr.png' width={174.5} height={173.5} quality={100} alt='QR Code' />
            </div>
            <ul className={styles.explanation}>
              <li className={styles.expItem}>Откройте приложение Вашего банка;</li>
              <li className={styles.expItem}>Нажмите на иконку QR;</li>
              <li className={styles.expItem}>Наведите камеру на QR-код;</li>
              <li className={styles.expItem}>Ожидайте статуса операции</li>
            </ul>
            <div className={styles.status}>
              <InProcessIcon className={styles.inProcessIcon} width={65} height={57} />
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.banks}>
              <div className={styles.title}>
                Для оплаты отсканируйте QR-код камерой телефона или в приложении банка
              </div>
              <div className={styles.search}>
                <SearchIcon width={12} height={12} className={styles.icon} />
                <input placeholder='Поиск...' type="text" />
              </div>
              <ul className={styles.bankList}>
                {banks.map(bank => (
                  <li 
                    key={bank.id} 
                    className={`${styles.bankItem} ${activeBank === bank.id ? styles.active : ''}`}
                    onClick={() => handleBankClick(bank.id)}
                  >
                    {bank.icon}{bank.name}
                  </li>
                ))}
                <div className={styles.mobileProcess}>
                  <InProcessIconMob className={styles.inMobile} width={65} height={56}/>
                </div>
              </ul>
            </div>
            <div className={styles.btn}>
              <button>Выбрать банк</button>
            </div>
          </div>
        </div>
        <div className={styles.companies}>
          <PciIcon width={56.07} height={21.46} />
          <VisaIcon width={37.89} height={21.46} />
          <MirIcon width={52.31} height={21.46} />
          <MasterIcon width={45.29} height={16.1} />
        </div>
      </div>
    </div>
  );
};

export default SpbPopUp;
