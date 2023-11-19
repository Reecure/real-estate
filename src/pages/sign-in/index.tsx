import React from "react";
import SignInComp from "@/components/Authentification/SignInComp";
import {store} from "@/redux/app/store";
import {Provider} from "react-redux";

const SignIn = () => {
	return (
		<Provider store={store}>
			<SignInComp />
		</Provider>
	);
};

export default SignIn;
