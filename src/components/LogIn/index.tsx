"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <form className="" onSubmit={submitHandler}>
            <h1 className="mb-4">LogIn</h1>
            <div className="">
              {props.searchParams?.message && (
                <p>{props.searchParams?.message}</p>
              )}
              <label className="" htmlFor="email_field">
                Email address
              </label>
              <input
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
