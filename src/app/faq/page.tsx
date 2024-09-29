
'use client'
import React from 'react';
import styles from './faq.module.scss';
import FaqIcon from '../../../public/faq/faq.svg';
import SteamIcon from '../../../public/faq/steam.svg';
import CoinsIcon from '../../../public/faq/coins.svg';
import ReviewsIcon from '../../../public/faq/rerviews.svg';
import GameIcon from '../../../public/faq/gamestick.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Accordion from '@/components/Accordion/Accordion';

const page = () => {
  return (
    <div className={styles.faq}>
      <div className="container">
        <div className={styles.heading}>
            <FaqIcon className='icon' width={18} height={18}/>
            <div className={styles.title}>
                FAQ
            </div>
        </div>
        <div className={styles.body}>
            <div className={styles.tabs}>
            <Tabs>
                <TabList>
                    <Tab>
                        <SteamIcon className='icon' width={32} height={32}/>
                        <h2 className='header'>Информация о вашем Steam</h2>
                    </Tab>
                    <Tab>
                        <CoinsIcon className='icon' width={36} height={36}/>
                        <h2 className='header'>Финансовые вопросы</h2>
                    </Tab>
                    <Tab>
                        <ReviewsIcon className='icon' width={32} height={32}/>
                        <h2 className='header'>Вопросы по работе сервиса</h2>
                    </Tab>
                    <Tab>
                        <GameIcon className='icon' width={35} height={23}/>
                        <h2 className='header'>Деньги на баланс Steam</h2>
                    </Tab>
                </TabList>

                <TabPanel>
                <Accordion 
                    showWarningIcon={true}
                    question='У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                <Accordion 
                    question='Пришла сумма меньше чем в калькуляторе. Что делать?' 
                    answer="PUBG: Battlegrounds — многопользовательская онлайн-игра в жанре королевской битвы, разрабатываемая и издаваемая студией PUBG Corporation, дочерней компанией корейского издателя Krafton, ранее известного как Bluehole."
                />
                <Accordion 
                    question='У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                <Accordion 
                    question='Политика возврата' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                </TabPanel>
                <TabPanel>
                <Accordion 
                    question='У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                <Accordion 
                    question='У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                </TabPanel>
                <TabPanel>
                <Accordion 
                    question='У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                </TabPanel>
                <TabPanel>
                <Accordion 
                    question='У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                <Accordion 
                    question='У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                <Accordion 
                    question='У меня новый (свежесозданный) или ранее не пополнявшийся аккаунт' 
                    answer="Если вы воспользовались нашими услугами то просим вас проявить немного терпения, мы максимально быстро выполним ваш заказ, и вы сможете продолжить игру на вашем аккаунте."
                />
                </TabPanel>
            </Tabs>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
