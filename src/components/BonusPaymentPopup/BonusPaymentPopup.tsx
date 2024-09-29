import React from 'react'
import styles from './bonus.module.scss'
import Link from 'next/link'
import VkIcon from '../../../public/bonus/vk.svg';
import TgIcon from '../../../public/bonus/tg.svg';
import ClockIcon from '../../../public/bonus/clock.svg';
import CloseIcon from '../../../public/bonus/close.svg';
import UserIcon from '../../../public/bonus/user.svg';
import CheckedIcon from '../../../public/bonus/checked.svg';
import UnCheckedIcon from '../../../public/bonus/unchecked.svg';
import { Tooltip } from 'react-tooltip';
import { useBonusPopupStore } from '@/shared/store/bonusPopupStore';

const BonusPaymentPopup = () => {
    const { setIsOpen } = useBonusPopupStore()
    return (
        <div className={styles.overlay}>
            <div className={styles.bonus}>
                <div className={styles.body}>
                    <CloseIcon className={styles.closeIcon} onClick={() => setIsOpen(false)} />
                    <div className={styles.content}>
                        <div className={styles.conditions}>
                            <h2 className={styles.title}>Пополнение без оплаты</h2>
                            <div className={styles.subtitle}>Выполните ряд условий</div>
                            <div className={styles.actions}>
                                <div className={styles.actionWrap}>
                                    {/* <Link href='#' className={styles.subscribe}>1. Подписаться на группу <VkIcon className={styles.condIcon} width={26} height={15}/></Link>  */}
                                    <Link href='#' className={styles.subscribed}>1. Подписаться на группу <VkIcon className={styles.condedIcon} width={26} height={15} /></Link>
                                    {/* <div data-tooltip-id="unchecked-tooltip" data-tooltip-content="Подтвердите выполнение" className={styles.unChecked}><UnCheckedIcon width={23} height={22}/></div> */}
                                    <Tooltip
                                        id="unchecked-tooltip"
                                        className={styles.customTooltip}
                                        place="bottom-start"
                                        noArrow
                                    />
                                    <div className={styles.checked}><CheckedIcon width={20} height={15} /> </div>
                                </div>
                                <div className={styles.actionWrap}>
                                    <Link href='#' className={styles.subscribeTg}>2. Подписаться на канал <TgIcon className={styles.condIcon} width={26} height={26} /></Link>
                                    {/* <Link href='#' className={styles.subscribedTg}>2. Подписаться на канал  <TgIcon className={styles.condedIcon}  width={26} height={26}/></Link>  */}
                                    <div data-tooltip-id="unchecked2-tooltip" data-tooltip-content="Подтвердите выполнение" className={styles.unChecked}><UnCheckedIcon width={23} height={22} /></div>
                                    <Tooltip
                                        id="unchecked2-tooltip"
                                        className={styles.customTooltip}
                                        place="bottom-start"
                                        noArrow
                                    />
                                    {/* <div className={styles.checked}><CheckedIcon width={20} height={15}/></div> */}
                                </div>
                            </div>
                            <div className={styles.countdown}>
                                <ClockIcon width={38} height={38} />
                                <div className={styles.countText}>
                                    Функция станет доступна
                                    через <span>09:36</span> мин.
                                </div>
                            </div>
                            <div className={styles.wrap}>
                                <input
                                    id="email"
                                    placeholder="Логин..."
                                    type="email"
                                    className={styles.input}
                                />
                                <UserIcon className={styles.userIcon} />
                            </div>
                            <button
                                disabled
                                className={styles.submitBtnDisabled}
                                data-tooltip-id="btn-tooltip"
                                data-tooltip-content="Недоступно, выполните условия"
                            >
                                Пополнить
                            </button>
                            <Tooltip
                                id="btn-tooltip"
                                className={styles.customTooltip}
                                place="bottom-start"
                                noArrow
                            />
                            {/* <button className={styles.submitBtn}>Пополнить</button> */}
                        </div>
                        <div className={styles.info}>
                            <img className={styles.man} src='/bonus/man.png' alt="" />
                            <div className={styles.infoText}>На данный момент вы можете воспользоваться акцией 1 раз (для 1 аккаунта) - только для проверки сервиса. Повторно станет доступна в праздничные дни или распродажи. </div>
                            <div className={styles.warning}>Советуем заглядывать сюда почаще!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonusPaymentPopup
