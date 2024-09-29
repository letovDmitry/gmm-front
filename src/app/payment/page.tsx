'use client'

import React from 'react'
import styles from './payment.module.scss'
import SearchIcon from '../../../public/payment/search.svg';
import NumIcon from '../../../public/payment/num.svg';
import CopyIcon from '../../../public/payment/copy.svg';
import DateIcon from '../../../public/payment/date.svg';
import UserIcon from '../../../public/payment/user.svg';
import RubIcon from '../../../public/payment/rub.svg';
import SuccessIcon from '../../../public/payment/success.svg';
import InProceessIcon from '../../../public/payment/inprocess.svg';
import ErrorIcon from '../../../public/payment/error.svg';
import SupportIcon from '../../../public/payment/support.svg';
import RevIcon from '../../../public/payment/review.svg';
import ProgressBars from '@/components/ProgressBar/ProgressBarRating';
import LikeIcon from '../../../public/payment/thumb-up.svg';
import DisLikeIcon from '../../../public/payment/dislike.svg';
import ReplayIcon from '../../../public/payment/replay.svg';
import RapidPay from '@/components/RapidPay/RapidPay';
import CopyToClipboard from 'react-copy-to-clipboard';

const page = () => {
    const paymentNumber = '3611356';
    const dateOfPayment = '19.02.2024';
    const userLogin = 'Login';
    const totalPurchase = '1500';
    return (
        <div className={styles.payment}>
            <div className="container">
                <div className={styles.heading}>
                    <SearchIcon width={20} height={20} />
                    <div className={styles.title}>
                        Информация о платеже
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.data}>
                        <div className={styles.dataItem}>
                            <NumIcon width={17} height={13.55} />
                            <div className={styles.mainData}>
                                <span className={styles.itemName}>Номер платежа</span>
                                <span className={styles.itemData}>3611356</span>
                            </div>
                            <CopyToClipboard text={paymentNumber}>
                                <CopyIcon className={styles.copyIcon} width={17.22} height={17.81} />
                            </CopyToClipboard>
                        </div>
                        <div className={styles.dataItem}>
                            <DateIcon width={19} height={18} />
                            <div className={styles.mainData}>
                                <span className={styles.itemName}>Дата платежа</span>
                                <span className={styles.itemData}>19.02.2024</span>
                            </div>
                            <CopyToClipboard text={dateOfPayment}>
                                <CopyIcon className={styles.copyIcon} width={17.22} height={17.81} />
                            </CopyToClipboard>
                        </div>
                        <div className={styles.dataItem}>
                            <UserIcon width={16} height={18} />
                            <div className={styles.mainData}>
                                <span className={styles.itemName}>Логин</span>
                                <span className={styles.itemData}>Login</span>
                            </div>
                            <CopyToClipboard text={userLogin}>
                                <CopyIcon className={styles.copyIcon} width={17.22} height={17.81} />
                            </CopyToClipboard>
                        </div>
                        <div className={styles.dataItem}>
                            <RubIcon width={14.6} height={16} />
                            <div className={styles.mainData}>
                                <span className={styles.itemName}>Сумма</span>
                                <span className={styles.itemDataYellow}>1500 ₽</span>
                            </div>
                            <CopyToClipboard text={totalPurchase}>
                                <CopyIcon className={styles.copyIcon} width={17.22} height={17.81} />
                            </CopyToClipboard>
                        </div>
                        <div className={styles.dataItemSuccess}>
                            <SuccessIcon width={24} height={24} />
                            <div className={styles.mainDataStatus}>
                                <span className={styles.statusName}>Статус платежа</span>
                                <span className={styles.status}>Успешно</span>
                            </div>
                        </div>
                        {/* <div className={styles.dataItemInProcess}>
                    <InProceessIcon width={24} height={24}/>
                    <div className={styles.mainDataStatus}>
                        <span className={styles.statusNameYellow}>Статус платежа</span>
                        <span className={styles.status}>Обрабатывается</span>
                    </div>
                </div>
                <div className={styles.dataItemError}>
                    <ErrorIcon width={24} height={24}/>
                    <div className={styles.mainDataStatus}>
                        <span className={styles.statusNameRed}>Статус платежа</span>
                        <span className={styles.status}>Отмена</span>
                    </div>
                </div> */}
                    </div>
                    <div className={styles.description}>
                        <div className={styles.desc}>
                            PUBG: Battlegrounds — многопользовательская онлайн-игра в жанре королевской битвы, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Krafton, ранее известного как Bluehole. многопользовательская онлайн-игра в жанре королевской битвы, разрабатываемая и издаваемая студией
                        </div>
                        <div className={styles.warning}>
                            Обратите внимание на статус платежа
                            <span className={styles.yellow}>!</span>
                        </div>
                        <div className={styles.statusBlock}>
                            <div className={styles.statusItemSuccess}>
                                <SuccessIcon className={styles.statusIcon} width={24} height={24} />
                                <div className={styles.statusWrap}>
                                    <div className={styles.statusInfo}>Успешно</div>
                                    <div className={styles.statusTextGreen}>
                                        В скором времени
                                        заказ будет обработан, пожалуйста ожидайте</div>
                                </div>
                            </div>
                            <div className={styles.statusItemInProcess}>
                                <InProceessIcon className={styles.statusIcon} width={24} height={24} />
                                <div className={styles.statusWrap}>
                                    <div className={styles.statusInfo}>Обрабатывается</div>
                                    <div className={styles.statusTextYellow}>
                                        В скором времени
                                        заказ будет обработан, пожалуйста ожидайте</div>
                                </div>
                            </div>
                            <div className={styles.statusItemError}>
                                <ErrorIcon className={styles.statusIcon} width={24} height={24} />
                                <div className={styles.statusWrap}>
                                    <div className={styles.statusInfo}>Отмена</div>
                                    <div className={styles.statusTextRed}>
                                        В скором времени
                                        заказ будет обработан, пожалуйста ожидайте</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.support}>
                        <SupportIcon className={styles.supportIcon} width={60} height={49} />
                        <div className={styles.supportWrap}>
                            <div className={styles.supportTitle}>
                                Возникли
                                <br />
                                проблемы?
                            </div>
                            <div className={styles.supportText}>
                                О братитесь в техническую поддержку, при обращении укажите номер вашего платежа
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.review}>
                    <div className={styles.heading}>
                        <RevIcon width={20} height={20} />
                        <div className={styles.title}>Добавить отзыв</div>
                    </div>
                    <div className={styles.revBody}>
                        <div className={styles.addRev}>
                            <div className={styles.textArea}>
                                <textarea placeholder='...'></textarea>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.btnSubmit}>Отправить</button>
                                <div className={styles.thumbs}>
                                    <button className={styles.btnLike}><span>Рекомендую</span><LikeIcon width={22.29} height={21.58} /></button>
                                    <button className={styles.btnDisLike}><span>Не Рекомендую</span><DisLikeIcon width={22.29} height={21.58} /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rates}><ProgressBars /></div>
                    </div>
                </div>
                <div className={styles.pay}>
                    <div className={styles.heading}>
                        <ReplayIcon width={20} height={20} />
                        <div className={styles.title}>Повторно пополнить</div>
                    </div>
                </div>
                <RapidPay />
            </div>
        </div>
    )
}

export default page
