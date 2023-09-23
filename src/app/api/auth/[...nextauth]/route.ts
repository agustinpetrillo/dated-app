import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import axios from "axios";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_API}/auth/login`,
          {
            email: credentials?.email,
            password: credentials?.password,
          }
        );
        const user = await res.data;

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }

        // if (
        //   credentials?.email === "test@test.com" &&
        //   credentials?.password === "test12345"
        // ) {
        //   return {
        //     email: "test@test.com",
        //     name: "petri",
        //     last_name: "tester",
        //   };
        // } else {
        //   return null;
        // }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// const res = await fetch("http://localhost:8000/auth/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     username: credentials?.username,
//     password: credentials?.password,
//   }),
// });
// const user = await res.json();

// export default NextAuth({
//   providers: [
//     // OAuth authentication providers...
//     AppleProvider({
//       clientId: process.env.APPLE_ID,
//       clientSecret: process.env.APPLE_SECRET,
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_ID,
//       clientSecret: process.env.FACEBOOK_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     // Passwordless / email sign in
//     EmailProvider({
//       server: process.env.MAIL_SERVER,
//       from: "NextAuth.js <no-reply@example.com>",
//     }),
//   ],
// });
