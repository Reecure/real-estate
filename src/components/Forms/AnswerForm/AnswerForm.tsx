import {FC} from "react";
import {ApartmentRequest} from "@/types";

interface Props {
    item: ApartmentRequest
}

const AnswerForm: FC<Props> = ({item}) => {

	return (
		<>
			{item.name}
			{item.user}
		</>
	);
};

export default AnswerForm;