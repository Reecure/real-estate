import Container from "@/components/UI/Container";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Hood from "./Hood";
import Projects from "./Projects";
import Requests from "./Requests";

type Props = {};

const UserDashboards = (props: Props) => {
	const [selectedSection, setSelectedSection] = useState(0);
	const router = useRouter();
	const sectionHandler = useCallback(
		(id: number) => {
			setSelectedSection(id);
			const queryParams = { section: id.toString() };
			router.push({
				pathname: router.pathname,
				query: queryParams,
			});
		},
		[router]
	);

	useEffect(() => {
		const queryParams = router.query.section;
		const sectionId = parseInt((queryParams as string) || "0");
		setSelectedSection(sectionId);
	}, [router]);

	return (
		<Container className="pt-16 pb-12">
			<Hood sectionHandler={sectionHandler} selectedSection={selectedSection} />
			{ selectedSection === 0 ? (
				<Requests />
			) : (
				<Projects />
			)}
		</Container>
	);
};

export default UserDashboards;
