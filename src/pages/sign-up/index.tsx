import CreateAccount from "../../components/Authentification/CreateAccount";
import {store} from "@/redux/app/store";
import React from "react";
import {Provider} from "react-redux";

type Props = {};

const SignUp = (props: Props) => {
	return (
		<Provider store={store}>
			<CreateAccount />
		</Provider>
	);
};

export default SignUp;
