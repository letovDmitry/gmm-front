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
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

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

    const intervalId = setInterval(() => {
      const iframe = document.querySelector(
        "iframe[src*='oauth.telegram.org']"
      ) as HTMLIFrameElement;
      if (iframe) {
        iframeRef.current = iframe; // Сохраняем iframe в ref
        clearInterval(intervalId); // Останавливаем поиск после нахождения
        if (props.onIframeReady) {
          props.onIframeReady(iframe); // Сообщаем, что iframe готов
        }
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
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

  return <div ref={hiddenDivRef} hidden />;
}

const SocialButtons = memo(() => {
  const [iframeElement, setIframeElement] = useState<HTMLIFrameElement | null>(
    null
  ); // Храним iframe

  // Функция для обработки клика по VkIcon
  const handleVkIconClick = () => {
    console.log("click");
    if (iframeElement) {
      // Здесь можно взаимодействовать с iframe
      // Например, если нужно вызвать клик в iframe:
      console.log("click 2");
      const iframeDocument = iframeElement.contentWindow?.document;
      if (iframeDocument) {
        console.log("click got");
        const buttonInsideIframe = iframeDocument.querySelector("button"); // Найдем кнопку в iframe (или другой элемент)
        buttonInsideIframe?.click(); // Выполним клик на кнопке в iframe
      }
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
          onIframeReady={setIframeElement}
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
