import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
import VkIcon from "../../../public/auth/vk.svg";

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
      <button type="submit">
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
