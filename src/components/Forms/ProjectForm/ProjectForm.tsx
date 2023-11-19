import React, {FC, useEffect} from "react";
import {useAppDispatch} from "@/redux/app/hooks";
import {fetchUser} from "@/redux/features/getUserByIdSlice";
import Button, {Themes} from "@/components/UI/Button/Button";
import {Project} from "@/types";
import {ProjectTypes} from "@/constants/projectTypes";

type Props = {
    item: Project;
};

const projectOptions = [
	ProjectTypes.Penthouse,
	ProjectTypes.Townhouse,
	ProjectTypes.Apartment,
];

const ProjectForm: FC<Props> = ({ item }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUser(item.owner));
	}, [dispatch, item.owner]);

	return (
		<form className={""}>
			<div className="flex justify-between items-center mb-5">
				<h4 className="text-4xl">Edit Project</h4>
			</div>
			<div className=" mb-5">
				<label htmlFor="" className={"uppercase text-[9px] tracking-[2px]"}>
                    Name
				</label>
				<input
					type="text"
					className={"custom-field"}
					placeholder={item.name}
				/>
				<label htmlFor="" className={"uppercase text-[9px] tracking-[2px]"}>
                    Type
				</label>
				<select name="" id="" className={"custom-field"}>
					{projectOptions.map((item) => {
						return (
							<option key={item} value={item}>
								{item}
							</option>
						);
					})}
				</select>
			</div>
			<div className="flex justify-end gap-5">
				<Button theme={Themes.RED} className={"uppercase"}>Delete</Button>
				<Button theme={Themes.GRADIENT} className={"uppercase"}>Save</Button>
			</div>
		</form>
	);
};

export default ProjectForm;