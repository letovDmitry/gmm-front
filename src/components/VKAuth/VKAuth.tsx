import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken, signIn } from "next-auth/react";
import VkIcon from "../../../public/auth/vk.svg";
import styles from "./vk.module.scss";

export default function VkAuth({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <form action="https://teamproject.site/api/auth/callback/vk" method="POST">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <input
        type="hidden"
        name="callbackUrl"
        value="https://teamproject.site/api/auth/callback/vk"
      />
      <button className={styles.socialBtn} onClick={() => signIn("vk")}>
        <VkIcon width={26} height={15} />
      </button>
    </form>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
