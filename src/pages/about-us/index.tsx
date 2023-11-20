import React from "react";
import AboutUsPage from "@/components/AboutUsPage";
import Navbar from "@/components/Navbar";
import Container from "@/components/UI/Container";
import {store} from "@/redux/app/store";
import {Provider} from "react-redux";

const AboutUs = () => {
	return (
        <Provider store={store}>
		    <Container>
		    	<Navbar />
		    	<div className={"custom-padding py-32"}>
		    		<AboutUsPage />
		    	</div>
		    </Container>
        </Provider>
	);
};

export default AboutUs;
