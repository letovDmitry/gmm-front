import React, { useEffect, useState } from 'react';
import styles from './banner.module.scss';
import WalletIcon from '../../../public/banner/wallet.svg';
import UsersIcon from '../../../public/banner/group.svg';
import TinkIcon from '../../../public/banner/t-bank.svg';
import CardIcon from '../../../public/banner/bank-card.svg';
import CountUp from 'react-countup';
import Image from 'next/image';
import Link from 'next/link';
import { getMainStats } from '@/shared/api/stats/stats';
import { useMainStatsStore } from '@/shared/store/statsStore';
import Pusher from 'pusher-js';
import { setOffline } from '@/shared/api/auth/auth';



const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!
})

Pusher.logToConsole = true

const Banner = () => {
    const { stats, setStats } = useMainStatsStore()
    useEffect(() => {
        window.addEventListener('unload', () => {
            setOffline()
        })
        getMainStats().then((res) => {
            setStats(res.data)
        })

    }, [])

    useEffect(() => {
        const channel = pusher.subscribe('stats')
        channel.bind('newUser', () => {
            setStats({ ...stats, users: stats.users + 1 })
        })
        channel.bind('newPayment', () => {
            setStats({ ...stats, replinish: stats.replinish + 1 })
        })
        channel.bind('onlineIncrease', () => {
            console.log('incrrease')
            // setStats({ ...stats, online: stats.online + 1 })
            getMainStats().then((res) => {
                setStats(res.data)
            })
        })
        channel.bind('onlineDecrease', () => {
            console.log('dicrease')
            // setStats({ ...stats, online: stats.online - 1 })
            getMainStats().then((res) => {
                setStats(res.data)
            })
        })

    }, [stats])
    console.log(stats)
    return (
        <div className={styles.banner}>
            <div className={styles.body}>
                <div className={styles.yellowBanner}>
                    <div className={styles.bookImg}>
                        <Image src='/banner/book.png' width={384} height={365} alt='счет' quality={100}></Image>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.replenish}>
                            <WalletIcon width={27} height={24} />
                            <div className={styles.repItem}>
                                <div className={styles.name}>Пополнений</div>
                                <div className={styles.count}>
                                    <CountUp end={stats?.replinish!} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.users}>
                            <UsersIcon width={29} height={24} />
                            <div className={styles.repItem}>
                                <div className={styles.name}>Клиентов</div>
                                <div className={styles.count}>
                                    <CountUp end={stats?.users!} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href='#' className={styles.blueBanner}>
                    <div className={styles.inner}>
                        <div className={styles.lSide}>
                            <TinkIcon width={80} height={49} />
                            <div className={styles.title}>Меняйте правила игры</div>
                            <div className={styles.desc}>С кредиткой ALL Games</div>
                        </div>
                        <div className={styles.rSide}>
                            <CardIcon width={89} height={55} />
                            <div className={styles.lisence}>Лицензия на рекламу №43254</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Banner
