'use client'
import React from 'react'
import styles from './heroblock.module.scss'
import Checkout from '../Checkout/Checkout'
import Banner from '../Banner/Banner'
import Activity from '../Activity/Activity'

const HeroBlock = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className={styles.body}>
          <Checkout />
          <Banner />
          <Activity />
        </div>
      </div>
    </div>
  )
}

export default HeroBlock

