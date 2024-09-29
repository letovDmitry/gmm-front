import React from 'react';
import styles from './activity.module.scss';
import UsersIcon from '../../../public/activity/users.svg';
import ActiveIcon from '../../../public/activity/icon.svg';
import SteamIcon from '../../../public/activity/steam.svg';
import ClockIcon from '../../../public/activity/clock.svg';
import { useMainStatsStore } from '@/shared/store/statsStore';

const Activity = () => {
    const { stats, setStats } = useMainStatsStore()
    const items = Array(12).fill({ name: 'clock***', time: '22:28', cost: '521.71 ₽' });

    return (
        <div className={styles.activity}>
            <div className={styles.title}>
                <div className={styles.main}>
                    <UsersIcon width={18} height={17} /> Активность
                </div>
                <div className={styles.count}>
                    <div className={styles.animate}>
                        <ActiveIcon width={12} height={12} className={styles.anim} />
                        <div className={styles.pulsatingCircle}></div>
                    </div><span>{stats.online}</span>
                </div>
            </div>
            <div className={styles.body}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.description}>
                            <div className={styles.inner}>
                                <SteamIcon width={32} height={32} />
                                <div className={styles.info}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.time}>
                                        <ClockIcon width={13} height={13} className={styles.clockIcon} />
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cost}>{item.cost}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activity;
