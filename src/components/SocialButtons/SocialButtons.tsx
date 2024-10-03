import { memo } from "react";
import VkAuth from "../VKAuth/VKAuth";
import { LoginButton } from "@telegram-auth/react";
import { signIn } from "next-auth/react";

const SocialButtons = memo(() => {
  return (
    <>
      <VkAuth />
      <LoginButton
        botUsername={"sadjxjcvjxzucvu_bot"}
        onAuthCallback={(data) => {
          signIn("telegram-login", { callbackUrl: "/profile" }, data as any);
        }}
        buttonSize="small" // "large" | "medium" | "small"
        cornerRadius={5} // 0 - 20
        showAvatar={true} // true | false
        lang="en"
      />
    </>
  );
});

export default SocialButtons;
