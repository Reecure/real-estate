import {FC} from "react";

interface Props {
    className?: string,
    onClick: () => void
}

const Overlay: FC<Props> = ({className, onClick}) => (
	<div
		data-testid={"overlay"}
		onClick={onClick}
		className={`${className} blur-lg flex items-center justify-center fixed top-0 bottom-0 right-0 left-0 cursor-pointer z-[100] bg-black/40`}
	/>
);

export default Overlay;