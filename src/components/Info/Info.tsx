import React from 'react'
import styles from './info.module.scss';
import CoinsIcon from '../../../public/info/coins.svg';
import SuccessIcon from '../../../public/info/success.svg';
import BrokenIcon from '../../../public/info/broken.svg';
import LikeIcon from '../../../public/info/like.svg';
import LogoIcon from '../../../public/info/logo.svg';
import LogoMainIcon from '../../../public/info/logo-main.svg';
import RubCoinsIcon from '../../../public/info/rub-coins.svg'
import ClickIcon from '../../../public/info/click.svg';
import TinkIcon from '../../../public/info/tinkof.svg';
import StarIcon from '../../../public/info/star.svg';
import ReviewsMainBlock from '../ReviewsMainBlock/ReviewsMainBlock';
import Link from 'next/link';


const Info = () => {
  return (
    <div className={styles.info}>
      <div className="container">
        <div className={styles.body}>
            <p className={styles.steam}>
                Steam (Стим)  – крупный онлайн-сервис компьютерных игр, о котором знает каждый геймер. На платформе можно скачать игры от многих разработчиков на платной и бесплатной основе.
                Кроме предоставления игрового контента, платформа является социальной сетью для игроков. Они могут общаться, добавлять в друзья, создавать сообщества. Но, первоочередный вопрос, который возникает: как пополнить баланс для покупок?
            </p>
            <div className={styles.infoBlock}>
                <div className={styles.title}>Пополнение кошелька Стим</div>
                <div className={styles.subtitle}>Автоматизированная система нашего сервиса предлагает проведение платежа в несколько быстрых этапов:</div>

                <div className={styles.ways}>
                    <div className={styles.img}>
                        <CoinsIcon className={styles.icon} width={74} height={70}/>
                    </div>
                    <ul className={styles.wayList}>
                        <li className={styles.items}>Укажите логин, использующийся на игровой платформе;</li>
                        <li className={styles.items}>Введите почту и промо-код при наличии;</li>
                        <li className={styles.items}>Выберите сумму перевода;</li>
                        <li className={styles.items}>Определитесь с платежной системой.</li>
                    </ul>
                </div>
                <div className={styles.service}>Сервис автоматически проведет расчет указанной суммы и добавит комиссию сервиса 10%, комиссия платежной системы 3%. Без скрытых комиссий. Ознакомьтесь с условиями, и совершите платеж, если вас все устраивает. Деньги поступят на баланс сразу.</div>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.title}>Преимущество Gamemoney?</div>
                <div className={styles.subtitle}>Мы с командой создали сервис по платежам в игровые платформы, первым запустили пополнение Стим (Steam). Всего за несколько минут пользователь может перевести деньги и осуществить покупку игры или другого контента. Для наших клиентов предлагаются такие преимущества:</div>

                <div className={styles.mainWays}>
                    <div className={styles.img}>
                        <SuccessIcon className={styles.icon} width={73} height={81} />
                    </div>
                    <ul className={styles.wayList}>
                        <li className={styles.items}>Минимальная комиссия. Сервис снимает 10%, а при приеме платежа – 1-3%;</li>
                        <li className={styles.items}>Низкий лимит на минимальное пополнение Стим – 25 рублей по СПБ. При использовании карты – 100 рублей;</li>
                        <li className={styles.items}>Автоматизированная система, гарантирующая моментальное зачисление денег;</li>
                        <li className={styles.items}>Система промо-кодов для постоянных клиентов, предлагающая сэкономить. Их начисление проводится регулярно;</li>
                        <li className={styles.items}>Официальное сотрудничество с партнерами поставщиками из СНГ;</li>
                        <li className={styles.items}>Личный кабинет – переходя в него, пользователь может ознакомиться с историей платежей и персональными предложениями;</li>
                        <li className={styles.items}>Круглосуточная техническая поддержка, оперативно решающая вопросы;</li>
                        <li className={styles.items}>Подключение интернет-эквайринга от Тинькофф, что ускоряет процесс перевода;</li>
                    </ul>
                    <RubCoinsIcon width={300} height={232}/>
                </div>
                <div className={styles.mainService}><LikeIcon width={19} height={21} className={styles.iconLike}/> Мы предлагаем комфортные условия обслуживания для клиентов, и возможность пополнения кошелька за несколько кликов</div>
            </div>
            <div className={styles.description}>
                <div className={styles.descItem}>
                    <div className={styles.descContent}>
                        <div className={styles.descTitle}>В чем сложность?</div>
                        <div className={styles.descWrap}>
                            <div className={styles.descIcon}>
                                <BrokenIcon width={76} height={50}/>
                            </div>
                            <div className={styles.descText}>Из-за введения санкций, пополнить кошелек на платформе затруднительно. Компания Стим не вводила ограничений против пользователей, но сложности с выходом из страны платежных систем создали проблему.
                                В качестве альтернативного варианта, предлагающего оперативно пополнить кошелек с минимальной комиссией, можно использовать наш сервис gamemoney. Зачисление на баланс происходит моментально, а пользоваться сервисом можно в любое время.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.descItem}>
                    <div className={styles.descContent}>
                        <div className={styles.descTitleYellow}>Альтернативы?</div>
                        <div className={styles.descWrap}>
                            <div className={styles.descIcon}>
                                <LogoIcon width={76} height={40}/>
                            </div>
                            <div className={styles.descText}>Пополнение Steam (Стим) через электронный кошелек «Киви» больше не работает, хотя этот способ был наиболее востребованным среди пользователей. Не так давно он был альтернативным вариантом, заменявшим многие платежные системы.
                            Наш сервис gamemoney.ru предлагает решение проблемы, обеспечивая быстрое зачисление денег на счет и обход ограничений. Мы работаем официально, что позволяет гарантировать безопасность платежей и сохранение конфиденциальности. Для клиентов предлагается честное сотрудничество, без скрытых комиссий: при заполнении заявки, сумма процентов показывается сразу.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.greenBlock}>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <LogoMainIcon width={76} height={40}/>
                    </div>
                    <div className={styles.greenBody}>
                        <div className={styles.greenText}>
                            <span>Использование Gamemoney</span> - отличное решение, которое позволит сэкономить время, и пополнять баланс в один клик. Для удобства, мы предлагаем использование разных способов оплаты с быстрым зачислением денег. При возникновении сложностей с переводом денег, воспользуйтесь консультацией службы поддержки.
                        </div>
                        <div className={styles.btn}>
                            <Link href='#form'><ClickIcon className={styles.clickIcon} width={20} height={27}/>Пополнить</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.collaborating}>
                <div className={styles.colText}>
                    <div className={styles.title}>Сотрудничество</div>
                    <div className={styles.subtitle}>Совместная работа с Тинькофф позволила нам получить подключение к интернет-эквайрингу, что упростило прием платежей. Это дает возможность ускорить процесс перечисления денег, гарантируя безопасность. Также, внимания заслуживают лимиты пополнения, ведь минимальная сумма – всего 25 рублей. Максимального порога для перевода нет, что лишает ограничений.</div>
                </div>
                <TinkIcon className={styles.tinkIcon} width={71} height={73}/>
            </div>
            <div className={styles.reputation}>
                <StarIcon className={styles.icon} width={73} height={69}/>
                <div className={styles.repBody}>
                    <div className={styles.repTitle}>Репутация и отзывы</div>
                    <div className={styles.repText}>
                        Мы очень дорожим своими клиентами и стараемся в любых ситуациях найти компромисс в возникших проблемах. Почитать мнение пользователей вы можете прямо у нас в сервисе или на крупных площадках, такие как: Яндекс, Т-Банк или на тематических ресурсах.
                    </div>
                </div>
            </div>
            <ReviewsMainBlock />
        </div>
      </div>
    </div>
  )
}

export default Info
