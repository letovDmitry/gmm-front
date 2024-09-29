import React from 'react'
import styles from './reviews-main.module.scss';
import ThumbsUpIcon from '../../../public/reviews-main/thumb-up.svg'
import ThumbsDownIcon from '../../../public/reviews-main/thumb-down.svg';
import Link from 'next/link';
import ProgressBars from '../ProgressBar/ProgressBarRating';
import Image from 'next/image';

const ReviewsMainBlock = () => {
  return (
    <div className={styles.reviews}>
        <div className="container">
            <div className={styles.body}>
                <Link href='/reviews' className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.account}>
                            <div className={styles.img}>
                                <Image src='/reviews-main/user.png' alt='пользователь' width={32} height={32} quality={100}></Image>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>GlamBl***</div>
                                <div className={styles.dates}>
                                    <span className={styles.date}>06</span>
                                    <span className={styles.month}>марта в</span>
                                    <span className={styles.time}>15:29</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.revText}>Спасибо! Пополнил баланс, все пришло. Отношение сервиса к клиенту безупречное...</div>
                            <div className={styles.cost}>100 ₽</div>
                        </div>
                        <div className={styles.rating}>
                            <ThumbsUpIcon width={23} height={22.27} />
                            <div className={styles.ratText}>Рекомендую</div>
                        </div>
                    </div>
                </Link>
                <div className={styles.banner}>
                    <div className={styles.inner}>
                        <div className={styles.rates}>
                            <ProgressBars />
                        </div>
                        <div className={styles.bannerImg}>
                            <Image src='/info/star.png' alt='пользователь' width={192} height={188} quality={100}></Image>
                        </div>
                        <div className={styles.bannerText}>
                        Опция станет доступна после успешного пополнения счёта. Каждый отзыв привязывается к финансовой операции пользователя. Вы можете написать в службу поддержки, если у вас возникли технические трудности при работе с системой.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewsMainBlock
