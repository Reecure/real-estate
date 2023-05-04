import axios from "axios";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import session from "redux-persist/lib/storage/session";
import dbConnect from "../../../../config/dbConnect";
import User from "../../../../models/user";

export default nextAuth({
  providers: [
    CredentialsProvider({
      //@ts-ignore
      async authorize(credentials: Record<string, string>, req) {
        dbConnect();
        const { email } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid Email or Password");
        }
        return {
          user: { ...user },
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  secret: "secret",
});
