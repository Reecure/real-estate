import React from "react";
import {useFormContext} from "react-hook-form";

type Props = {};

const Crypto = (props: Props) => {
	const {register} = useFormContext();
	return (
		<div className="flex flex-col sm:flex-row sm:gap-5">
			<div className="space-x-2">
				<label className="custom-checkbox">
                I want explore selling as an NFT
					<input
						{...register("sellingNFT")}
						type={"checkbox"}
						className="bg-primary-dark-gray rounded-lg focus:outline-none py-3 px-2"
					/>
					<span className="checkmark"></span>
				</label>
			</div>
			<div className="space-x-2">
				<label className="custom-checkbox">
                I accept crypto
					<input
						{...register("acceptCrypto")}
						type={"checkbox"}
						className="bg-primary-dark-gray rounded-lg focus:outline-none py-3 px-2"
					/>
					<span className="checkmark"></span>
				</label>
			</div>
		</div>
	);
};

export default Crypto;
