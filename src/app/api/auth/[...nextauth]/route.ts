import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import VKProvider from "next-auth/providers/vk";
import { AuthDataValidator } from "@telegram-auth/server";
import { objectToAuthDataMap } from "@telegram-auth/server/utils";

const handler = NextAuth({
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
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        console.log("sdf");
        const { email, password } = credentials as any;
        const res = await fetch("https://teamproject.site/app/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
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
      clientId: "52383690" as string,
      clientSecret: "KEoTrbQxN17C33xBkLc6" as string,
    }),
    CredentialsProvider({
      id: "telegram-login",
      name: "Telegram Login",
      credentials: {},
      async authorize(credentials, req) {
        console.log("botauth");
        const validator = new AuthDataValidator({
          botToken: `7593865060:AAHn_UOE-WzgE9huPIQTSxGeyZU7pzzO6zw`,
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
    async jwt({ token, user }: { token: any; user: Record<any, any> }) {
      return { ...token, ...user };
    },
    async session({
      session,
      token,
      user,
    }: {
      token: any;
      user: Record<any, any>;
      session: Record<any, any>;
    }) {
      // Send properties to the client, like an token from a provider.
      session.user = token;
      return session;
    },
  },
  //   pages: {
  //     signIn: "/profile?loginOpened=true",
  //   },
});

export { handler as GET, handler as POST };
