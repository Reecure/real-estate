import {ApartmentRequest} from "@/types";
import React, {FC, useState} from "react";
import {BsThreeDotsVertical} from "react-icons/bs";
import NewLabel from "@/components/UI/NewLabel";
import RequestTableRawDotsModal from "@/components/Modals/RequestTableRawDotsModal";
import Button, {Themes} from "@/components/UI/Button/Button";
import ProjectForm from "@/components/Forms/ProjectForm/ProjectForm";
import Modal from "@/components/UI/Modal/Modal";
import AnswerForm from "@/components/Forms/AnswerForm/AnswerForm";

type Props = {
  className: string;
  item: ApartmentRequest;
};

const RequestsTableRaw: FC<Props> = ({ className, item }) => {
	const [threeDotModalOpen, setThreeDotModalOpen] = useState(false);
	const [answerOpen, setAnswerOpen] = useState(false);

	const setAnserModalOpen = () => {
		setAnswerOpen(answerOpen => !answerOpen);
	};

	return (
		<>
			<tr className={`${className} `}>
				<td
					className={`min-w-[150px] py-4 px-7 sticky left-0 z-[1] ${className}`}
				>
					{item.name}
				</td>
				<td className="min-w-[150px] px-1">{item.type}</td>
				<td className="min-w-[150px] px-1">
					{item.status == "New" ? <NewLabel /> : <>{item.status}</>}
				</td>
				<td className="min-w-[150px] px-1">
					{item.text.slice(0, 30).concat("...")}
				</td>
				<td className="min-w-[150px] px-1">{item.data}</td>
				<td className="min-w-[150px] px-1 text-primary-blue">{item.user}</td>
				<td className="min-w-[150px] px-1">
					<Button
						theme={Themes.BLACK}
						onClick={setAnserModalOpen}
						className="border-[1px]  border-[#404040] uppercase tracking-[2px] text-[12px] font-semibold"
					>
            Answer
					</Button>
				</td>
				<td
					className="px-1 min-w-[60px] relative"
					onClick={() => {
						setThreeDotModalOpen((prev) => !prev);
					}}
				>
					<BsThreeDotsVertical className="cursor-pointer" />
					{threeDotModalOpen && (
						<div className={"absolute top-1/4 -left-20"}>
							<RequestTableRawDotsModal
								isOpen={threeDotModalOpen}
								className={className}
							/>
						</div>
					)}
				</td>
			</tr>
			<Modal isOpen={answerOpen} setIsOpen={setAnserModalOpen}>
				<AnswerForm item={item} />
			</Modal>
		</>
	);
};

export default RequestsTableRaw;
