import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./login.module.scss";
import MailIcon from "../../../public/auth/mail.svg";
import CloseIcon from "../../../public/auth/close.svg";
import KeyIcon from "../../../public/auth/key.svg";
import VkIcon from "../../../public/auth/vk.svg";
import TgIcon from "../../../public/auth/tg.svg";
import SearchIcon from "../../../public/auth/search.svg";
import ParamIcon from "../../../public/auth/params.svg";
import Link from "next/link";
import { useLoginPopupStore } from "@/shared/store/loginPopupStore";
import { useRegisterPopupStore } from "@/shared/store/registerPopupStore";
import { LoginButton } from "@telegram-auth/react";
import sha256 from "crypto-js/sha256";
import { useForgotPopupStore } from "@/shared/store/forgotPopupStore";
import {
  getCsrfToken,
  useSession,
  signIn,
  getProviders,
} from "next-auth/react";
import axios from "axios";
import VkAuth from "../VKAuth/VKAuth";
import SocialButtons from "../SocialButtons/SocialButtons";

const code_verifier = "FGH767Gd65";
const code_challenge = sha256(code_verifier);

const vkLink = `https://id.vk.com/authorize?code_challenge=${code_challenge}&code_challenge_method=s256&state=${code_verifier}&client_id=52350309&redirect_uri=https://teamsite.com/api/auth/vkAuth`;

const LoginPopup = () => {
  const { data: session, status } = useSession();
  const { setIsOpen } = useLoginPopupStore();
  const { setIsOpen: setRegisterPopup } = useRegisterPopupStore();
  const { setIsOpen: setForgotPopup } = useForgotPopupStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const goToRegister = () => {
    setIsOpen(false);
    setRegisterPopup(true);
  };
  const goToForgot = () => {
    setIsOpen(false);
    setForgotPopup(true);
  };

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    // VKID.Config.init({
    //     app: 52350309, // Идентификатор приложения.
    //     redirectUrl: "http", // Адрес для перехода после авторизации.
    //     state: 'dj29fnsadjsd82', // Произвольная строка состояния приложения.
    //     codeVerifier: 'FGH767Gd65', // Верификатор в виде случайной строки. Обеспечивает защиту передаваемых данных.
    //     scope: 'email phone password', // Список прав доступа, которые нужны приложению.
    //     mode: VKID.ConfigAuthMode.InNewTab// По умолчанию авторизация открывается в новой вкладке.
    // });
    // const oneTap = new VKID.OneTap();
    // const container = document.getElementById('VkIdSdkOneTap');
    //
    // // Проверка наличия кнопки в разметке.
    // if (container) {
    //     // Отрисовка кнопки в контейнере с именем приложения APP_NAME, светлой темой и на русском языке.
    //     oneTap.render({ container: container, scheme: VKID.Scheme.DARK, lang: VKID.Languages.RUS })
    //         .on(VKID.WidgetEvents.ERROR, console.log('error')); // handleError — какой-либо обработчик ошибки.
    // } else {
    //     console.log('not found')
    // }
  }, []);

  console.log(session);

  getCsrfToken().then((c) => console.log(c));

  getProviders().then((p) => console.log(p));

  //   const handleLoginVk = async (e) => {
  //     e.preventDefault();
  //     const csrf = await getCsrfToken();
  //     const response = await axios.post(
  //       "https://teamproject.site/api/auth/signin/vk",
  //       {
  //         callbackUrl: "https://teamproject.site/api/auth/callback/vk",
  //         csrfToken: csrf,
  //       }
  //     );
  //     console.log(response);

  //     // window.location.reload();
  //   };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    }).then(({ ok, error }) => {
      console.log(ok, error);
      if (ok) {
        window.location.reload();
      } else {
        console.log(error);
        setIsError(true);
      }
    });
  };

  console.log(isError);

  return (
    <>
      <div className={styles.overlay}></div> {/* Overlay */}
      <div className={styles.login} ref={popupRef}>
        <div className={styles.body}>
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => setIsOpen(false)}
          />
          {isError && <div className={styles.error}>Ошибка</div>}
          <h2 className={styles.title}>Добро пожаловать,</h2>
          <div className={styles.subtitle}>Войдите в свой аккаунт</div>
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
                }}
                className={styles.input}
              />
              <KeyIcon className={styles.keyIcon} />
            </div>
            <div className={styles.actions}>
              <button
                className={styles.submitBtn}
                onClick={(e) => handleLogin(e)}
              >
                Войти
              </button>
              {/* <button
                onClick={(e) => signIn("vk")}
                className={styles.socialBtn}
              >
                <VkIcon width={26} height={15} />
              </button> */}
              <SocialButtons />
            </div>
            {/* <button
              onClick={(e) => {
                // e.preventDefault();
                signIn("vk");
              }}
            >
              vk
            </button>

            <button
              onClick={(e) => {
                // e.preventDefault();
                signIn("telegram-login");
              }}
            >
              tg
            </button> */}

            {/* <LoginButton botUsername='wyCNEcDbTASyDgJ_bot' onAuthCallback={(data) => tgAuth(data)} buttonSize='medium' lang='ru' /> */}
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
                onClick={() => goToRegister()}
              >
                <ParamIcon
                  className={styles.optionIcon}
                  width={21}
                  height={21}
                />
                <span>Регистрация</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
