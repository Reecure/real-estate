import React from "react";
import Container from "../UI/Container";
import MainForm from "./MainForm";
import {FormProvider, useForm} from "react-hook-form";
import Button, {Themes} from "@/components/UI/Button/Button";

type Props = {};

const CreateProject = (props: Props) => {
	const methods = useForm({
		defaultValues: {
			mlsNumber: "",
			address: "",
			price: "",
			neighbourhood: "",
			propertyType: "",
			poster: "",
			sellingNFT: false,
			acceptCrypto: false,
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			acceptedCurrencies: "",
			size: "",
			bedrooms: "",
			bathrooms: "",
			yearBuilt: "",
			floors: "",
			description: "",
			agentRemarks: "",
			videoLink: "",
		}
	});

	return (
		<Container className="text-white custom-padding">
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(data =>
						alert(JSON.stringify(data, null, 1)))}
				>
					<div className="flex justify-between py-16">
						<h5 className="text-4xl font-semibold">New Project</h5>
						<div className="space-x-3">
							<Button
								theme={Themes.BLACK}
								type={"button"}
								onClick={() => history.back()}
								className="rounded-[50px]"
							>
                            Back
							</Button>
							<Button theme={Themes.GRADIENT} type={"submit"} className="rounded-[50px]">Create</Button>
						</div>
					</div>
					<MainForm />
				</form>
			</FormProvider>
		</Container>
	);
};

export default CreateProject;
