import { memo } from "react";
import VkAuth from "../VKAuth/VKAuth";
import { LoginButton } from "@telegram-auth/react";
import { signIn } from "next-auth/react";

const SocialButtons = memo(() => {
  return (
    <>
      <VkAuth />
      {/* <div style={{ width: 20 }}> */}
      <LoginButton
        botUsername={"sadjxjcvjxzucvu_bot"}
        onAuthCallback={(data) => {
          signIn("telegram-login", { callbackUrl: "/profile" }, data as any);
        }}
        buttonSize="small" // "large" | "medium" | "small"
        cornerRadius={20} // 0 - 20
        showAvatar={false} // true | false
        lang="en"
      />
      {/* </div> */}
    </>
  );
});

export default SocialButtons;
