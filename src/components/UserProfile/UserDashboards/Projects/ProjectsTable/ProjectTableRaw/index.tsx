import Image from "next/image";
import React, {FC, useState} from "react";
import {Project} from "@/types";
import Link from "next/link";
import {Paths} from "@/constants/paths";
import Button, {Themes} from "@/components/UI/Button/Button";
import Modal from "@/components/UI/Modal/Modal";
import ProjectForm from "@/components/Forms/ProjectForm/ProjectForm";

type Props = {
  className: string;
  item: Project;
};

const ProjectTableRaw: FC<Props> = ({ className, item }) => {
	const [editModalOpen, setEditModalOpen] = useState(false);

	const editHandler = () => {
		setEditModalOpen((prev) => !prev);
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
			</tr>
			<Modal isOpen={editModalOpen} setIsOpen={editHandler}>
				<ProjectForm item={item} />
			</Modal>
		</>
	);
};

export default ProjectTableRaw;
