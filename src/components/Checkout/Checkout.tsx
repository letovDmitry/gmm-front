import React, { useState, ChangeEvent, MouseEvent, KeyboardEvent } from "react";
import styles from "./checkout.module.scss";
import KeyIcon from "../../../public/checkout/key.svg";
import UserIcon from "../../../public/checkout/user.svg";
import InfoIcon from "../../../public/checkout/info.svg";
import MailIcon from "../../../public/checkout/mail.svg";
import PromoIcon from "../../../public/checkout/promo.svg";
import RubIcon from "../../../public/checkout/rub.svg";
import RusFlag from "../../../public/checkout/rus-flag.svg";
import ArrRight from "../../../public/checkout/arrow-right.svg";
import FireIcon from "../../../public/checkout/fire.svg";
import CoinsIcon from "../../../public/checkout/coins.svg";
import SpbIcon from "../../../public/checkout/1.svg";
import CardIcon from "../../../public/checkout/2.svg";
import TinkIcon from "../../../public/checkout/3.svg";
import GPayIcon from "../../../public/checkout/sber-pey.svg";
import YandexIcon from "../../../public/checkout/5.svg";
import WallletIcon from "../../../public/checkout/wallet.svg";
import DiscountIcon from "../../../public/checkout/discount.svg";
import CoinsUpIcon from "../../../public/checkout/coins-up.svg";
import TouchIcon from "../../../public/checkout/touch.svg";
import LoadingIcon from "../../../public/checkout/loading.svg";
import ErrorIcon from "../../../public/checkout/error.svg";
import SuccessIcon from "../../../public/checkout/success.svg";
import SecureIcon from "../../../public/checkout/secure.svg";
import SpbPopUp from "../SpbPopUp/SpbPopUp";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import { makePayment } from "@/shared/api/payment/payment";
import { useRouter } from "next/navigation";
import axios from "axios";

type InputValues = {
  login: string;
  email: string;
  promo: string;
  price: string;
};

type LoadingStates = {
  login: boolean;
  email: boolean;
  promo: boolean;
  price: boolean;
};

type InputStatuses = {
  login: "success" | "error" | null;
  email: "success" | "error" | null;
  promo: "success" | "error" | null;
  price: "success" | "error" | null;
};

const Checkout: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const router = useRouter();
  const [inputValues, setInputValues] = useState<InputValues>({
    login: "",
    email: "",
    promo: "",
    price: "",
  });
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    login: false,
    email: false,
    promo: false,
    price: false,
  });
  const [inputStatuses, setInputStatuses] = useState<InputStatuses>({
    login: null,
    email: null,
    promo: null,
    price: null,
  });

  const handlePayment = async (e: any) => {
    e.preventDefault();
    const link = await makePayment(parseInt(inputValues.price));
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (activeIndex === 0) {
      handlePopUpOpen();
    }

    const { data } = await axios.post("https://teamproject.site/app/payment", {
      amout: parseInt(inputValues.price) * 100,
    });

    // const link = await makePayment(parseInt(inputValues.price) * 100)
    router.replace(data);

    console.log(data);
  };

  const handlePayItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof InputValues
  ) => {
    let value = e.target.value.trim();

    if (field === "price") {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    setInputValues((prevState) => ({ ...prevState, [field]: value }));
    setLoadingStates((prevState) => ({ ...prevState, [field]: true }));
    setInputStatuses((prevState) => ({ ...prevState, [field]: null }));

    setTimeout(() => {
      setLoadingStates((prevState) => ({ ...prevState, [field]: false }));

      if (value === "") {
        setInputStatuses((prevState) => ({ ...prevState, [field]: null }));
      } else if (field === "login" && value === "login") {
        setInputStatuses((prevState) => ({ ...prevState, [field]: "success" }));
      } else if (field === "email" && value === "email") {
        setInputStatuses((prevState) => ({ ...prevState, [field]: "success" }));
      } else {
        setInputStatuses((prevState) => ({ ...prevState, [field]: "error" }));
      }
    }, 1000);
  };

  const handleButtonClick = (value: string) => {
    setInputValues((prevState) => ({ ...prevState, price: value }));
  };

  const renderIcon = (status: "success" | "error" | null) => {
    if (status === "success") {
      return (
        <SuccessIcon
          width={22}
          height={22}
          className={`${styles.iconWrapper} ${styles.successIcon} ${styles.visible}`}
        />
      );
    } else if (status === "error") {
      return (
        <ErrorIcon
          width={22}
          height={22}
          className={`${styles.iconWrapper} ${styles.errorIcon} ${styles.visible}`}
        />
      );
    }
    return null;
  };

  const isButtonDisabled = () => {
    const { login, email, price } = inputValues;
    return login.trim() === "" || email.trim() === "" || price.trim() === "";
  };

  const handlePopUpOpen = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const handlePopUpClose = () => {
    setShowPopup(false);
    document.body.style.overflow = "";
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextInputId: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const nextInput = document.getElementById(
        nextInputId
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <>
      <div className={styles.checkout}>
        <div className={styles.mobileCommission}>
          <div className={styles.fireIcon}>
            <FireIcon width={19} height={23} className={styles.fire} />
          </div>
          <div className={styles.comText}>
            Комиссия сервиса
            <span>10%</span>
          </div>
        </div>
        <div id="form" className={styles.title}>
          <KeyIcon className={styles.keyIcon} width={18} height={18} />
          Введите данные
        </div>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <UserIcon className={styles.userIcon} />
            <input
              id="login"
              placeholder="Введите логин..."
              className={styles.inputLogin}
              value={inputValues.login}
              onChange={(e) => handleInputChange(e, "login")}
              onKeyDown={(e) => handleKeyDown(e, "email")}
            />
            <Link href="/faq" className={styles.info}>
              <InfoIcon className={styles.infoIcon} />
            </Link>
            <div className={styles.inputState}>
              {loadingStates.login && (
                <LoadingIcon
                  width={22}
                  height={22}
                  className={styles.loadingIcon}
                />
              )}
              {renderIcon(inputStatuses.login)}
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.mail}>
              <MailIcon className={styles.mailIcon} />
              <input
                id="email"
                placeholder="Почта..."
                type="email"
                className={styles.input}
                value={inputValues.email}
                onChange={(e) => handleInputChange(e, "email")}
                onKeyDown={(e) => handleKeyDown(e, "promo")}
              />
              <div className={styles.inputStateCondition}>
                {loadingStates.email && (
                  <LoadingIcon
                    width={22}
                    height={22}
                    className={styles.loadingIcon}
                  />
                )}
                {renderIcon(inputStatuses.email)}
              </div>
            </div>
            <div className={styles.promo}>
              <PromoIcon className={styles.promoIcon} />
              <input
                id="promo"
                placeholder="Промокод..."
                type="text"
                className={styles.input}
                value={inputValues.promo}
                onChange={(e) => handleInputChange(e, "promo")}
                onKeyDown={(e) => handleKeyDown(e, "price")}
              />
              <div className={styles.inputStateCondition}>
                {loadingStates.promo && (
                  <LoadingIcon
                    width={22}
                    height={22}
                    className={styles.loadingIcon}
                  />
                )}
                {renderIcon(inputStatuses.promo)}
              </div>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.inputBody}>
              <RubIcon width={16} height={20} />
              <input
                id="price"
                type="text"
                value={inputValues.price}
                onChange={(e) => handleInputChange(e, "price")}
              />
            </div>
            <div className={styles.currencyBody}>
              <div className={styles.btns}>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => handleButtonClick("100")}
                >
                  100₽
                </button>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => handleButtonClick("200")}
                >
                  200₽
                </button>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => handleButtonClick("500")}
                >
                  500₽
                </button>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => handleButtonClick("2000")}
                >
                  2000₽
                </button>
              </div>
              <div className={styles.list}>
                <RusFlag width={22} height={22} />
                <div className={styles.currency}>руб.</div>
                <ArrRight width={7} height={10} />
              </div>
            </div>
          </div>
          <div className={styles.mobileBtns}>
            <button
              type="button"
              className={styles.btn}
              onClick={() => handleButtonClick("100")}
            >
              100₽
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={() => handleButtonClick("200")}
            >
              200₽
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={() => handleButtonClick("500")}
            >
              500₽
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={() => handleButtonClick("2000")}
            >
              2000₽
            </button>
          </div>
          <div className={styles.commission}>
            <div className={styles.fireIcon}>
              <FireIcon width={19} height={23} className={styles.fire} />
            </div>
            <div className={styles.comText}>
              Комиссия сервиса за пополнение
              <span>10%</span>
            </div>
          </div>
          <div className={styles.title}>
            <CoinsIcon width={18} height={18} /> Выберите платежную систему
          </div>
          <div className={styles.payment}>
            <div className={styles.types}>
              <div
                className={`${styles.payItem} ${
                  activeIndex === 0 ? styles.active : ""
                }`}
                onClick={() => handlePayItemClick(0)}
              >
                <SpbIcon className={styles.spb} />
                <span>2%</span>
              </div>
              <div
                className={`${styles.payItem} ${
                  activeIndex === 1 ? styles.active : ""
                }`}
                onClick={() => handlePayItemClick(1)}
              >
                <CardIcon className={styles.spb} />
                <span>2%</span>
              </div>
              <div
                className={`${styles.payItem} ${
                  activeIndex === 2 ? styles.active : ""
                }`}
                onClick={() => handlePayItemClick(2)}
              >
                <TinkIcon className={styles.spb} />
                <span>2%</span>
              </div>
              <div
                className={`${styles.payItem} ${
                  activeIndex === 3 ? styles.active : ""
                }`}
                onClick={() => handlePayItemClick(3)}
              >
                <GPayIcon className={styles.spb} />
                <span>2%</span>
              </div>
              <div
                className={`${styles.payItem} ${
                  activeIndex === 4 ? styles.active : ""
                }`}
                onClick={() => handlePayItemClick(4)}
              >
                <YandexIcon className={styles.spb} />
                <span>2%</span>
              </div>
            </div>
          </div>
          <div className={styles.advantages}>
            <div className={styles.advItem}>
              <WallletIcon width={20} height={19} />
              <div className={styles.context}>
                <div className={styles.advText}>Заплатите</div>
                <div className={styles.dots}></div>
                <div className={styles.advPrice}>260.35 ₽</div>
              </div>
            </div>
            <div className={styles.advItem}>
              <DiscountIcon width={20} height={20} />
              <div className={styles.context}>
                <div className={styles.advText}>Комиссия сервиса</div>
                <div className={styles.dots}></div>
                <div className={styles.advPrice}>200 ₽</div>
              </div>
            </div>
            <div className={styles.advItem}>
              <CoinsUpIcon width={18} height={17} className={styles.coinsUp} />
              <div className={styles.context}>
                <div className={styles.advTextSh}>Получите на Steam</div>
                <div className={styles.dots}></div>
                <div className={styles.advPriceSh}>20.15 ₽</div>
              </div>
            </div>
          </div>
          <div className={styles.agreement}>
            <label className={styles.agrBody}>
              <input className={styles.checkbox} type="checkbox" />
              <span className={styles.checkmark}></span>Я принимаю условия
              Пользовательского соглашения и правилами возврата
            </label>
          </div>
          <div className={styles.submitBtn}>
            <button
              className={
                isButtonDisabled()
                  ? `${styles.btn} ${styles.disabled}`
                  : styles.btn
              }
              disabled={isButtonDisabled()}
              {...(isButtonDisabled() && {
                "data-tooltip-id": "submit-tooltip",
                "data-tooltip-content": "Недоступно",
              })}
              onClick={handleSubmit}
            >
              <TouchIcon className={styles.iconTouch} width={20} height={27} />{" "}
              Пополнить <span>{inputValues.price}₽</span>
            </button>
            <Link
              href="#"
              className={styles.check}
              data-tooltip-id="secure-tooltip"
              data-tooltip-content="Проверить пополнение без оплаты"
            >
              <SecureIcon width={22} height={22} />
            </Link>
            <Tooltip
              id="submit-tooltip"
              className={styles.customTooltip}
              place="bottom-end"
              noArrow
            />
            <Tooltip
              id="secure-tooltip"
              className={styles.customTooltip}
              place="bottom-start"
              noArrow
            />
          </div>
        </form>
        {showPopup && <SpbPopUp onClose={handlePopUpClose} />}
      </div>
    </>
  );
};

export default Checkout;
