import React from "react";
import AboutUsPage from "@/components/AboutUsPage";
import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";

const AboutUs = () => {
	return (
		<Container>
			<Navbar />
			<div className={"custom-padding py-32"}>
				<AboutUsPage />
			</div>
		</Container>
	);
};

export default AboutUs;
