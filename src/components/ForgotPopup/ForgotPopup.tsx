import React, { useState } from 'react'
import styles from './forgot.module.scss'
import MailIcon from '../../../public/auth/mail.svg';
import CloseIcon from '../../../public/auth/close.svg';
import UserIcon from '../../../public/auth/user.svg';
import ParamIcon from '../../../public/auth/params.svg';
import Link from 'next/link';
import { useForgotPopupStore } from '@/shared/store/forgotPopupStore';
import { useLoginPopupStore } from '@/shared/store/loginPopupStore';
import { useRegisterPopupStore } from '@/shared/store/registerPopupStore';
import { forgotPassword } from '@/shared/api/auth/auth';

const ForgotPopup = () => {
    const [email, setEmail] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const { setIsOpen } = useForgotPopupStore()
    const { setIsOpen: setLoginOpen } = useLoginPopupStore()
    const { setIsOpen: setRegisterOpen } = useRegisterPopupStore()
    const goToLogin = () => {
        setLoginOpen(true)
        setIsOpen(false)
    }
    const goToRegister = () => {
        setRegisterOpen(true)
        setIsOpen(false)
    }

    const handleForgot = async (e: any) => {
        e.preventDefault()
        const user = await forgotPassword(email)
        if (user.status == 201) {
            setIsSuccess(true)

        }
    }
    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.forgotMain}>
                <div className={styles.body}>
                    <CloseIcon className={styles.closeIcon} />
                    {isSuccess &&

                        <div className={styles.successs}>Пароль успешно сброшен</div>
                    }
                    <h2 className={styles.title}>Добро пожаловать,</h2>
                    <div className={styles.subtitle}>Укажите вашу почту</div>
                    <form className={styles.form}>
                        <div className={styles.wrap}>
                            <input
                                id="email"
                                placeholder="Почта..."
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                className={styles.input}
                            />
                            <MailIcon className={styles.mailIcon} />
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.submitBtn} onClick={(e) => handleForgot(e)}>
                                Выслать пароль
                            </button>
                        </div>
                        <div className={styles.options}>
                            <Link href='#' className={styles.forgot} onClick={() => goToLogin()}>
                                <UserIcon className={styles.optionIcon} width={19} height={21} />
                                <span>Авторизация</span>
                            </Link>
                            <Link href='#' className={styles.register} onClick={() => goToRegister()}>
                                <ParamIcon className={styles.optionIcon} width={21} height={21} />
                                <span>Регистрация</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPopup
