import Image from "next/image";
import React from "react";
import confirmEmail from "../../../../public/confirmEmail.svg";
import Button, {Themes} from "@/components/UI/Button/Button";

type Props = {};

const ActivateEmail = (props: Props) => {
	return (
		<div className="max-w-[560px] py-10 bg-primary-dark-gray flex flex-col items-center justify-center rounded-[24px]">
			<Image src={confirmEmail} alt="reset" className="mb-8" />
			<p className="text-white mb-6">
        Thank you! Your email has been activated.
			</p>
			<Button theme={Themes.GRADIENT}>Open Homeverse</Button>
		</div>
	);
};

export default ActivateEmail;
