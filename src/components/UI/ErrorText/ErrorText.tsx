import {FC} from "react";

interface Props {
    text: string
}

const ErrorText: FC<Props> = ({text}) => {

	return (
		<p className={"text-sm text-red-700"}>
			{text}
		</p>
	);
};

export default ErrorText;