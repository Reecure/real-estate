import Image from "next/image";
import React, {FC, useEffect, useState} from "react";
import AdditionalDetail from "./AdditionalDetail";
import Crypto from "./Crypto";
import MainInfo from "./MainInfo";
import img from "../../../../public/non-image-in-field.svg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {useFormContext} from "react-hook-form";
import Button, {Themes} from "@/components/UI/Button/Button";

type Props = {
};

const MainForm: FC<Props> = () => {
	const [openAdditionalDetails, setOpenAdditionalDetails] = useState(false);

	const [previewImage, setPreviewImage] = useState<string | null>(null);
	const [isClosing, setIsClosing] = useState(false);

	const {register,setValue , formState: {errors}} = useFormContext();


	useEffect(() => {
		if (isClosing) {
			setTimeout(() => {
				setOpenAdditionalDetails(false);
				setIsClosing(false);
			}, 300);
		}
	}, [isClosing]);

	const handleToggleAdditionalDetails = () => {
		if (openAdditionalDetails) {
			setIsClosing(true);
		} else {
			setOpenAdditionalDetails(true);
		}
	};

	const fileInputRef = React.useRef<HTMLInputElement>(null);

	const handleClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setPreviewImage(reader.result as string);
				setValue("poster", reader.result);
			};
		}
	};
	return (
		<>
			<div className="flex justify-between flex-col md:flex-row-reverse gap-10">
				<div className={"relative w-full  min-w-[150px] min-h-[300px] md:max-w-[460px] md:max-h-[560px] bg-white/5 rounded-[24px] "}>
					<input
						ref={fileInputRef}
						type="file"
						name="poster"
						id="poster"
						onChange={handleFileChange}
						className="absolute inset-0 w-full h-full opacity-0 z-10"
					/>
					{previewImage ?
						<div className={"w-full h-full flex justify-center items-center"}>
							<Image
								src={previewImage}
								alt="Preview"
								width={600}
								height={600}
								className={"object-cover rounded-[24px]"}
							/>

						</div>
						: <div className=" flex flex-col items-center absolute top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2 ">
							<Image src={img} alt="img" className="mb-5" />
							<Button theme={Themes.BLUE} onClick={handleClick}>Upload Poster</Button>
						</div>
					}
					<button type={"button"} className={"absolute top-0 -right-5"} onClick={() => {
						setPreviewImage(null);
						setValue("poster", "");
					}}>x</button>
				</div>

				<div className="w-full">
					{/* Main inputs MLS ADDRESS etc... */}
					<MainInfo />

					{/* Crypto */}
					<Crypto />

					{/* Additional Details */}
					<div className="flex items-center space-x-5">
						<h5
							onClick={handleToggleAdditionalDetails}
							className="text-2xl font-semibold text-primary-blue mt-9 cursor-pointer mb-10"
						>Additional details
						</h5>
						<MdOutlineKeyboardArrowRight
							onClick={handleToggleAdditionalDetails}
							className={`text-primary-blue text-2xl duration-300 cursor-pointer ${
								openAdditionalDetails ? "rotate-90" : ""
							}`}
						/>
					</div>
					<AdditionalDetail isOpen={openAdditionalDetails} />
				</div>
			</div>
		</>
	);
};

export default MainForm;
