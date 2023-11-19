import Image from "next/image";
import React, {FC, useState} from "react";
import {BsThreeDotsVertical} from "react-icons/bs";
import {Project} from "@/types";
import ProjectTaleDotsRawModal from "@/components/Modals/ProjectTaleDotsRawModal";
import EditProjectModal from "@/components/Modals/EditProjectModal";
import Link from "next/link";
import {Paths} from "@/constants/paths";
import Button, {Themes} from "@/components/UI/Button/Button";
import EditProjectForm from "@/components/Modals/EditProjectModal";
import Modal from "@/components/UI/Modal/Modal";

type Props = {
  className: string;
  item: Project;
};

const ProjectTableRaw: FC<Props> = ({ className, item }) => {
	const [threeDotsMenuOpen, setThreeDotsMenuOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);

	const editHandler = () => {
		setEditModalOpen((prev) => !prev);
	};

	const threeDotsHandler = () => {
		setThreeDotsMenuOpen((prev) => !prev);
	};

	return (
		<>
			<tr className={`${className}`}>
				<td
					className={`${className} min-w-[150px] flex items-center space-x-2 sticky left-0 z-[1]`}
				>
					<Image
						src={item.poster}
						width={320}
						height={320}
						alt="img"
						className="my-4 ml-6 rounded-md w-12 h-12 "
					/>
					<Link
						href={`${Paths.Apartment}/${item._id}`}
						className={"hover:text-primary-blue duration-100"}
					>
						{item.name}
					</Link>
				</td>
				<td className="min-w-[150px] px-1">{item.propertyType}</td>
				<td className="min-w-[150px] px-1">{item.size}</td>
				<td className="min-w-[150px] px-1">{item.price}</td>
				<td className="min-w-[150px] px-1">{item.yearBuilt}</td>
				<td className="min-w-[150px] px-1">
					<Button
						theme={Themes.BLACK}
						onClick={editHandler}
						className="!px-8 border-[1px] !py-3  border-[#404040] uppercase tracking-[2px] text-[12px] font-bold"
					>
            Edit
					</Button>
				</td>
				<td className="px-1 min-w-[60px] relative">
					<BsThreeDotsVertical
						className={"cursor-pointer"}
						onClick={threeDotsHandler}
					/>
					<div className={"absolute top-1/4 -left-14"}>
						{threeDotsMenuOpen && (
							<ProjectTaleDotsRawModal isOpen={threeDotsMenuOpen} />
						)}
					</div>
				</td>
			</tr>
			<Modal isOpen={editModalOpen} setIsOpen={editHandler}>
				<EditProjectForm
					item={{ ...item }}
				/>
			</Modal>
		</>
	);
};

export default ProjectTableRaw;
