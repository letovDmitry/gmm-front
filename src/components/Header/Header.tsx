"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import MainIcon from "../../../public/header/main.svg";
import UserIcon from "../../../public/header/user.svg";
import QuestionIcon from "../../../public/header/ques.svg";
import ReviewIcon from "../../../public/header/review.svg";
import ExitIcon from "../../../public/header/exit.svg";
import VkIcon from "../../../public/header/vk.svg";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
// import LoginPopup from '../LoginPopup/LoginPopup';
// import ForgotPopup from '../ForgotPopup/ForgotPopup';
// import RegisterPopup from '../RegisterPopup/RegisterPopup';
import BonusPaymentPopup from "../BonusPaymentPopup/BonusPaymentPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import { useLoginPopupStore } from "@/shared/store/loginPopupStore";
import { useBonusPopupStore } from "@/shared/store/bonusPopupStore";
import { useAuth } from "@/app/auth-wrapper";
import { useRegisterPopupStore } from "@/shared/store/registerPopupStore";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import ForgotPopup from "../ForgotPopup/ForgotPopup";
import { useForgotPopupStore } from "@/shared/store/forgotPopupStore";
import { getProviders, signIn, useSession } from "next-auth/react";
import { getCsrfToken } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  const { isOpen: loginOpen, setIsOpen: loginSetOpen } = useLoginPopupStore();
  const { isAuth } = useAuth();
  const { isOpen: bonusOpen, setIsOpen: bonusSetOpen } = useBonusPopupStore();
  const { isOpen: registerOpen, setIsOpen: registerSetOpen } =
    useRegisterPopupStore();
  const { isOpen: forgotOpen, setIsOpen: forgotSetOpen } =
    useForgotPopupStore();
  const handleAuthClick = () => {
    if (isAuth) {
      bonusSetOpen(true);
    } else {
      loginSetOpen(true);
    }
  };

  const searchParams = useSearchParams();
  console.log(session);

  useEffect(() => {
    if (searchParams.get("loginOpened") === "true") {
      loginSetOpen(true);
    }
  }, [searchParams]);

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Link className={styles.logoLink} href="/">
            <div className={styles.logo}>
              <Image
                src="/logo.svg"
                width={75}
                height={40}
                quality={100}
                alt="лого"
              />
            </div>
          </Link>
          <div className={styles.main}>
            <nav className={styles.menu}>
              <ul className={styles.list}>
                <li>
                  <div className={styles.item}>
                    <MainIcon width={20} height={20} className={styles.icon} />
                    <div className={styles.text}>
                      <h1>Пополнить баланс Steam (Стим) моментально</h1>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className={styles.item} href="/profile">
                    <UserIcon width={20} height={20} className={styles.icon} />
                    <div className={styles.text}>Профиль</div>
                  </Link>
                </li>
                <li>
                  <Link className={styles.item} href="/faq">
                    <QuestionIcon
                      width={20}
                      height={20}
                      className={styles.icon}
                    />
                    <div className={styles.text}>FAQ</div>
                  </Link>
                </li>
                <li>
                  <Link className={styles.item} href="/reviews">
                    <ReviewIcon
                      width={23}
                      height={20}
                      className={styles.icon}
                    />
                    <div className={styles.text}>Отзывы</div>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.authBtn} onClick={handleAuthClick}>
              <div className={styles.authBody}>
                <div className={styles.authText}>Авторизация через</div>
                <VkIcon width={18} height={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {loginOpen && <LoginPopup />}
      {bonusOpen && <BonusPaymentPopup />}
      {registerOpen && <RegisterPopup />}
      {forgotOpen && <ForgotPopup />}
    </div>
  );
};

export default Header;
