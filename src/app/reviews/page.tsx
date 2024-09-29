
'use client'
import React from 'react'
import styles from './reviews.module.scss'
import ReviewIcon from '../../../public/reviews/reviews.svg';
import ClockIcon from '../../../public/reviews/clock.svg';
import WalletIcon from '../../../public/reviews/wallet.svg';
import LikeIcon from '../../../public/reviews/thumb-up.svg';
import DisLikeIcon from '../../../public/reviews/dislike.svg';
import FilterIcon from '../../../public/reviews/filter.svg';
import ChooseIcon from '../../../public/reviews/choose.svg';
import ProgressBars from '@/components/ProgressBar/ProgressBarRating';
import Image from 'next/image';

const page = () => {
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleClick = (item: any) => {
        setSelectedItem(item);
    };
    return (
        <div className={styles.review}>
            <div className="container">
                <div className={styles.heading}>
                    <ReviewIcon className={styles.reviewIcon} width={18} height={18} />
                    <h1 className={styles.title}>Отзывы пользователей</h1>
                </div>
                <div className={styles.body}>
                    <div className={styles.reviews}>
                        <div className={styles.goodReview}>
                            <div className={styles.inner}>
                                <div className={styles.top}>
                                    <div className={styles.gAccount}>
                                        <Image src='/reviews/avatar.png' width={45} height={45} alt='ава' quality={100}></Image>
                                        <div className={styles.data}>
                                            <div className={styles.gName}>clock***</div>
                                            <div className={styles.wrap}>
                                                <div className={styles.gText}>
                                                    <div className={styles.textWrap}>Пополнил(а) на <span className={styles.gCost}>400р </span></div><div className={styles.textWrap}>через <span className={styles.gVia}>Банковскую карту</span></div>
                                                </div>
                                                <div className={styles.date}>
                                                    <ClockIcon />
                                                    <span className={styles.month}>18 февраля,</span>
                                                    <span className={styles.time}>22:28</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.gRewText}>
                                    PUBG: Battlegrounds — многопользовательская онлайн-игра в жанре королевской битвы, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Krafton, ранее известного как Bluehole.
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.btns}>
                                        <div className={styles.replenish}>
                                            <WalletIcon width={14} height={12} />
                                            <span className={styles.quantity}>4</span>
                                            пополнения
                                        </div>
                                        <div className={styles.numberOf}>
                                            <ReviewIcon width={14} height={14} />
                                            <span className={styles.quantity}>1</span>
                                            отзыв
                                        </div>
                                    </div>
                                    <div className={styles.mobileActive}>
                                        <div className={styles.mobileDate}>
                                            <ClockIcon />
                                            <span className={styles.month}>18 февраля,</span>
                                            <span className={styles.time}>22:28</span>
                                        </div>
                                        <div className={styles.recomend}>
                                            Рекомендую
                                        </div>
                                        <LikeIcon width={22} height={22} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.goodReview}>
                            <div className={styles.inner}>
                                <div className={styles.top}>
                                    <div className={styles.gAccount}>
                                        <Image src='/reviews/avatar.png' width={45} height={45} alt='ава' quality={100}></Image>
                                        <div className={styles.data}>
                                            <div className={styles.gName}>clock***</div>
                                            <div className={styles.wrap}>
                                                <div className={styles.gText}>
                                                    <div className={styles.textWrap}>Пополнил(а) на <span className={styles.gCost}>400р </span></div><div className={styles.textWrap}>через <span className={styles.gVia}>Банковскую карту</span></div>
                                                </div>
                                                <div className={styles.date}>
                                                    <ClockIcon />
                                                    <span className={styles.month}>18 февраля,</span>
                                                    <span className={styles.time}>22:28</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.gRewText}>
                                    PUBG: Battlegrounds — многопользовательская онлайн-игра в жанре королевской битвы, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Krafton, ранее известного как Bluehole.
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.btns}>
                                        <div className={styles.replenish}>
                                            <WalletIcon width={14} height={12} />
                                            <span className={styles.quantity}>4</span>
                                            пополнения
                                        </div>
                                        <div className={styles.numberOf}>
                                            <ReviewIcon width={14} height={14} />
                                            <span className={styles.quantity}>1</span>
                                            отзыв
                                        </div>
                                    </div>
                                    <div className={styles.mobileActive}>
                                        <div className={styles.mobileDate}>
                                            <ClockIcon />
                                            <span className={styles.month}>18 февраля,</span>
                                            <span className={styles.time}>22:28</span>
                                        </div>
                                        <div className={styles.recomend}>
                                            Рекомендую
                                        </div>
                                        <LikeIcon width={22} height={22} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.badReview}>
                            <div className={styles.inner}>
                                <div className={styles.top}>
                                    <div className={styles.gAccount}>
                                        <Image src='/reviews/avatar.png' width={45} height={45} alt='ава' quality={100}></Image>
                                        <div className={styles.data}>
                                            <div className={styles.bName}>clock***</div>
                                            <div className={styles.wrap}>
                                                <div className={styles.gText}>
                                                    <div className={styles.textWrap}>Пополнил(а) на <span className={styles.bCost}>400р </span></div><div className={styles.textWrap}>через <span className={styles.bVia}>Банковскую карту</span></div>
                                                </div>
                                                <div className={styles.date}>
                                                    <ClockIcon />
                                                    <span className={styles.month}>18 февраля,</span>
                                                    <span className={styles.time}>22:28</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.bRewText}>
                                    PUBG: Battlegrounds — многопользовательская онлайн-игра в жанре королевской битвы, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Krafton, ранее известного как Bluehole.
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.btns}>
                                        <div className={styles.bReplenish}>
                                            <WalletIcon width={14} height={12} />
                                            <span className={styles.quantity}>4</span>
                                            пополнения
                                        </div>
                                        <div className={styles.bNumberOf}>
                                            <ReviewIcon width={14} height={14} />
                                            <span className={styles.quantity}>1</span>
                                            отзыв
                                        </div>
                                    </div>
                                    <div className={styles.bMobileActive}>
                                        <div className={styles.bMobileDate}>
                                            <ClockIcon />
                                            <span className={styles.month}>18 февраля,</span>
                                            <span className={styles.time}>22:28</span>
                                        </div>
                                        <div className={styles.bRecomend}>
                                            Не Рекомендую
                                        </div>
                                        <DisLikeIcon width={22} height={22} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.goodReview}>
                            <div className={styles.inner}>
                                <div className={styles.top}>
                                    <div className={styles.gAccount}>
                                        <Image src='/reviews/avatar.png' width={45} height={45} alt='ава' quality={100}></Image>
                                        <div className={styles.data}>
                                            <div className={styles.gName}>clock***</div>
                                            <div className={styles.wrap}>
                                                <div className={styles.gText}>
                                                    <div className={styles.textWrap}>Пополнил(а) на <span className={styles.gCost}>400р </span></div><div className={styles.textWrap}>через <span className={styles.gVia}>Банковскую карту</span></div>
                                                </div>
                                                <div className={styles.date}>
                                                    <ClockIcon />
                                                    <span className={styles.month}>18 февраля,</span>
                                                    <span className={styles.time}>22:28</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.gRewText}>
                                    PUBG: Battlegrounds — многопользовательская онлайн-игра в жанре королевской битвы, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Krafton, ранее известного как Bluehole.
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.btns}>
                                        <div className={styles.replenish}>
                                            <WalletIcon width={14} height={12} />
                                            <span className={styles.quantity}>4</span>
                                            пополнения
                                        </div>
                                        <div className={styles.numberOf}>
                                            <ReviewIcon width={14} height={14} />
                                            <span className={styles.quantity}>1</span>
                                            отзыв
                                        </div>
                                    </div>
                                    <div className={styles.mobileActive}>
                                        <div className={styles.mobileDate}>
                                            <ClockIcon />
                                            <span className={styles.month}>18 февраля,</span>
                                            <span className={styles.time}>22:28</span>
                                        </div>
                                        <div className={styles.recomend}>
                                            Рекомендую
                                        </div>
                                        <LikeIcon width={22} height={22} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sidebars}>
                        <div className={styles.rating}>
                            <Image src='/reviews/star.png' width={192} height={188} quality={100} alt='звезда'></Image>
                            <ProgressBars />
                        </div>
                        <div className={styles.filter}>
                            <div className={styles.filterHead}>
                                <FilterIcon width={23} height={20} />
                                Фильтр
                            </div>
                            <div className={styles.filtration}>
                                <div
                                    className={styles.items}
                                    onClick={() => handleClick('all')}
                                >
                                    <div style={{ width: 24, height: 24 }}>
                                        {selectedItem === 'all' && <ChooseIcon width={24} height={24} />}
                                    </div>
                                    <ReviewIcon width={18} height={18} />
                                    <span className={styles.by}>Все</span>
                                </div>
                                <div
                                    className={styles.items}
                                    onClick={() => handleClick('positive')}
                                >
                                    <div style={{ width: 24, height: 24 }}>
                                        {selectedItem === 'positive' && <ChooseIcon width={24} height={24} />}
                                    </div>
                                    <LikeIcon width={22} height={22} />
                                    <span className={styles.by}>Положительные</span>
                                </div>
                                <div
                                    className={styles.items}
                                    onClick={() => handleClick('negative')}
                                >
                                    <div style={{ width: 24, height: 24 }}>
                                        {selectedItem === 'negative' && <ChooseIcon width={24} height={24} />}
                                    </div>
                                    <DisLikeIcon width={22} height={22} />
                                    <span className={styles.by}>Отрицательные</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
