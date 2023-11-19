import React, {useState} from "react";
import Link from "next/link";
import {Paths} from "@/constants/paths";
import Button, {Themes} from "@/components/UI/Button/Button";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "@/redux/app/hooks";
import {setLogged} from "@/redux/features/userAuthSlice";
import {useRouter} from "next/router";

type Props = {};

const SignInComp = (props: Props) => {
	const [authError, setAuthError] = useState(false);
	const {register, handleSubmit, formState: {errors}} = useForm({
		defaultValues: {
			email: "",
			password: ""
		}
	});

	const dispatch = useAppDispatch();
	const rounter = useRouter();

	return (
		<form
			onClick={handleSubmit((data) => {
				const storedEmail = localStorage.getItem("real-estate-email");
				const storedPassword = localStorage.getItem("real-estate-password");

				if (data.email === storedEmail && data.password === storedPassword) {
					dispatch(setLogged(true));
					setAuthError(false);
					rounter.push("/");
				} else if (data.email !== storedEmail && data.password !== storedPassword) {
					setAuthError(true);
				}
			})}
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[560px] text-white p-10 rounded-3xl bg-primary-dark-gray">
			<h3 className="mb-5 text-4xl">Sign In</h3>
			{authError && <p className={"text-sm text-red-600"}>Invalid credentials</p> }
			<div className="flex flex-col">
				<label
					htmlFor="email"
					className="text-primary-text-dark-gray uppercase text-[9px] tracking-[0.21em] mb-1   "
				>
          Email
				</label>
				<input {...register("email")} type="text" className="px-4 py-3 rounded-lg bg-[#0E0E0E] mb-3" />
				<label
					htmlFor="password"
					className="text-primary-text-dark-gray uppercase text-[9px] tracking-[0.21em] mb-1   "
				>
          Password
				</label>
				<input {...register("password")} type="text" className="px-4 py-3 rounded-lg bg-[#0E0E0E] mb-8" />
			</div>
			<div className="flex items-center justify-between">
				<div>
          Don`t have an account{" "}
					<Link href={Paths.SignUp} className={"underline text-primary-blue"}>
            Sign Up
					</Link>
				</div>

				<Button type={"submit"} theme={Themes.GRADIENT} className="rounded-full ">Sign In</Button>
			</div>
		</form>
	);
};

export default SignInComp;
