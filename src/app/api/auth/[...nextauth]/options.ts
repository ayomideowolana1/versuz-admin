import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { headers } from "next/headers";

const OAuthUserConfig: any = {};

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "johndoe",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*********",
        },
      },
      async authorize(credentials) {
        const formData = new FormData();

        formData.append("email", credentials?.username || "");
        formData.append("password", credentials?.password || "");

        const requestOptions = {
          method: "POST",
          headers: {
            // 'Content-Type':'application/json'
          },
          body: formData,
        };

        const res = await fetch(
          "http://localhost:8080/versuz-erp/dashboard-api/auth/login.php",
          requestOptions
        );

        if (res.ok) {
          const response = await res.json();
          const { user, token } = response;
          
          return { ...user, token };
        } else {
          if (res.status == 401) {
            throw new Error("Invalid login credentials");
          } else {
            throw new Error("Internal Server Error");
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }:{token:any,user:any}) {
      if (user) {
        token.accessToken = user?.token;
      }
      return token;
    },
    async session({ session, token }:{session:any,token:any}) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};
