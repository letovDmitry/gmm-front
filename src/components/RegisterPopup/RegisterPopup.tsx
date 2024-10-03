import React, { useEffect, useRef, useState } from "react";
import styles from "./register.module.scss";
import MailIcon from "../../../public/auth/mail.svg";
import CloseIcon from "../../../public/auth/close.svg";
import KeyIcon from "../../../public/auth/key.svg";
import VkIcon from "../../../public/auth/vk.svg";
import SearchIcon from "../../../public/auth/search.svg";
import UserIcon from "../../../public/auth/user.svg";
import Link from "next/link";
import { useLoginPopupStore } from "@/shared/store/loginPopupStore";
import { useRegisterPopupStore } from "@/shared/store/registerPopupStore";
import { login, register } from "@/shared/api/auth/auth";
import { setCookie } from "@/lib/utils";
import { LoginButton } from "@telegram-auth/react";
import { useForgotPopupStore } from "@/shared/store/forgotPopupStore";
import axios from "axios";
import { signIn } from "next-auth/react";
import VkAuth from "../VKAuth/VKAuth";
import SocialButtons from "../SocialButtons/SocialButtons";

const RegisterPopup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);

  const { setIsOpen } = useLoginPopupStore();
  const { setIsOpen: setRegisterPopup } = useRegisterPopupStore();
  const { setIsOpen: setForgotPopup } = useForgotPopupStore();

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setRegisterPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setRegisterPopup]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goToLogin = () => {
    setRegisterPopup(false);
    setIsOpen(true);
  };
  const goToForgot = () => {
    setRegisterPopup(false);
    setForgotPopup(true);
  };

  // const tgAuth = async (data: any) => {
  //     console.log(data)
  //     const user = await register({ name: data.username, password: data.username, tgLink: `t.me/${data.username}`, avatar: data.photo_url })
  //     const token = await login({ name: user.data.name!, password: data.username })
  //     setCookie("accessToken", token.data.accessToken, 30)
  //     setIsOpen(false)
  //     setIsSuccess(true)
  //     location.reload()
  // }
  const handleRegister = async (e: any) => {
    e.preventDefault();
    axios
      .post(
        "https://teamproject.site/app/auth/signup",
        !isChecked
          ? {
              email,
              password,
            }
          : {
              email,
            }
      )
      .then(() => {
        setIsSuccess(true);
      })
      .catch((e) => {
        console.error(e);
        setIsError(true);
      });
  };

  return (
    <>
      <div className={styles.overlay}></div> {/* Overlay */}
      <div className={styles.registerMain} ref={popupRef}>
        <div className={styles.body}>
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => setRegisterPopup(false)}
          />
          {isError && <div className={styles.error}>Ошибка</div>}
          {isSuccess && <div className={styles.successs}>Успешно</div>}

          <h2 className={styles.title}>Добро пожаловать,</h2>
          <div className={styles.subtitle}>Укажите вашу почту</div>
          <form className={styles.form}>
            <div className={styles.wrap}>
              <input
                id="email"
                placeholder="Почта..."
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                  setIsError(false);
                  setIsSuccess(false);
                }}
                className={styles.input}
              />
              <MailIcon className={styles.mailIcon} />
            </div>
            <div className={styles.wrap}>
              <input
                id="password"
                placeholder="Пароль..."
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                  setIsError(false);
                  setIsSuccess(false);
                }}
                className={styles.input}
              />
              <KeyIcon className={styles.keyIcon} />
            </div>
            <div className={styles.agreement}>
              <label className={styles.agrBody}>
                <input
                  checked={isChecked}
                  onChange={(e) => {
                    setIsChecked((p) => !p);
                  }}
                  className={styles.checkbox}
                  type="checkbox"
                />
                <span className={styles.checkmark}></span>
                Сгенерировать и выслать пароль
              </label>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.submitBtn}
                onClick={(e) => handleRegister(e)}
              >
                Регистрация
              </button>
              <div className={styles.social}>
                <SocialButtons />
                {/* <button
                  onClick={() => signIn("telegram-login")}
                  className={styles.socialBtn}
                >
                  tg
                </button> */}
              </div>
            </div>
            <div className={styles.options}>
              <Link
                href="#"
                className={styles.forgot}
                onClick={() => goToForgot()}
              >
                <SearchIcon
                  className={styles.optionIcon}
                  width={21}
                  height={21}
                />
                <span>Забыли пароль?</span>
              </Link>
              <Link
                href="#"
                className={styles.register}
                onClick={() => goToLogin()}
              >
                <UserIcon
                  className={styles.optionIcon}
                  width={21}
                  height={21}
                />
                <span>Авторизация</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPopup;
