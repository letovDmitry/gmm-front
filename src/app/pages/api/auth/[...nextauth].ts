import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import VKProvider from "next-auth/providers/vk";
import { AuthDataValidator } from "@telegram-auth/server";
import { objectToAuthDataMap } from "@telegram-auth/server/utils";

export const authOptions = {
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as any;
        const res = await fetch("http://localhost:8000/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const user = await res.json();

        console.log({ user });

        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
    VKProvider({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "telegram-login",
      name: "Telegram Login",
      credentials: {},
      async authorize(credentials, req) {
        const validator = new AuthDataValidator({
          botToken: `${process.env.BOT_TOKEN}`,
        });

        const data = objectToAuthDataMap(req.query || {});

        const user = await validator.validate(data);

        if (user.id && user.first_name) {
          return {
            id: user.id.toString(),
            name: [user.first_name, user.last_name || ""].join(" "),
            image: user.photo_url,
          };
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: string; user: Record<any, any> }) {
      return { token, ...user };
    },
    async session({
      session,
      token,
      user,
    }: {
      token: string;
      user: Record<any, any>;
      session: Record<any, any>;
    }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  },
};
export default NextAuth(authOptions);
