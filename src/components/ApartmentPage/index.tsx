import { Project } from "@/types";
import React, { FC, useEffect } from "react";
import Container from "../UI/Container";
import MessageToUserCard from "./MessageToUserCard";
import ProjectDescription from "./ProductDescription";

import SwiperProjectPage from "./SwiperProjectPage";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
	fetchProjectById,
	selectProject,
} from "@/redux/features/getProjectByIdSlice";
import { useRouter } from "next/router";

type Props = {};

const ApartmentPage: FC<Props> = () => {
	const { data } = useAppSelector(selectProject);
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (id) {
			dispatch(fetchProjectById(id as string));
		}
	}, [dispatch, id]);

	return (
		<Container className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-12">
			<div className="max-w-[880px] ">
				<SwiperProjectPage apart={data as Project} />
				<ProjectDescription apart={data as Project} />
			</div>
			<div className="flex justify-center">
				<MessageToUserCard apart={data as Project} />
			</div>
		</Container>
	);
};

export default ApartmentPage;
