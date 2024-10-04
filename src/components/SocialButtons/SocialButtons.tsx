import { memo, useEffect, useRef, useState } from "react";
import VkAuth from "../VKAuth/VKAuth";
import { signIn } from "next-auth/react";
import styles from "./social.module.scss";
import VkIcon from "../../../public/auth/tg.svg";
import { createScript, TTelegramAuthLogin } from "@telegram-auth/react";

function initTelegramAuthLogin(options: TTelegramAuthLogin) {
  window.TelegramAuthLogin = options;
}

export function LoginButton(props: any) {
  const hiddenDivRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement>();

  useEffect(() => {
    // destroy the existing script element
    scriptRef.current?.remove();

    // init the global variable
    initTelegramAuthLogin({ onAuthCallback: props.onAuthCallback });

    // create a new script element and save it
    scriptRef.current = createScript(props);

    // add the script element to the DOM
    hiddenDivRef.current?.after(scriptRef.current);

    // Save siblings before unmount
    const siblings = hiddenDivRef.current?.parentElement?.children || [];

    return () => {
      // destroy the script element on unmount
      scriptRef.current?.remove();

      // We also need to remove the rendered iframe
      for (const element of siblings) {
        if (
          element instanceof HTMLIFrameElement &&
          element.src.includes("oauth.telegram.org")
        ) {
          element.remove();
          break;
        }
      }
    };
  }, [props]);

  useEffect(() => {
    if (props.onReady) {
      props.onReady(() => {
        hiddenDivRef.current?.click();
        console.log("1");
      });
    }
  }, [props]);

  return <div ref={hiddenDivRef} hidden />;
}

const SocialButtons = memo(() => {
  const [triggerLoginButtonClick, setTriggerLoginButtonClick] =
    useState<() => void | null>();

  // Функция для передачи клика на скрытый элемент через hiddenDivRef
  const handleVkIconClick = () => {
    console.log("click");
    if (triggerLoginButtonClick) {
      triggerLoginButtonClick(); // Вызываем клик на hiddenDivRef через переданную функцию
    }
  };
  return (
    <>
      <VkAuth />
      <div onClick={handleVkIconClick} className={styles.socialBtn}>
        <VkIcon width={36} height={25} />
      </div>
      <div style={{ display: "none" }}>
        <LoginButton
          onReady={setTriggerLoginButtonClick}
          botUsername={"sadjxjcvjxzucvu_bot"}
          onAuthCallback={(data) => {
            signIn("telegram-login", { callbackUrl: "/profile" }, data as any);
          }}
          buttonSize="small" // "large" | "medium" | "small"
          cornerRadius={20} // 0 - 20
          showAvatar={false} // true | false
          lang="en"
        />
      </div>
    </>
  );
});

export default SocialButtons;
