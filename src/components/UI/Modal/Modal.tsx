import {FC, ReactNode} from "react";
import Overlay from "@/components/UI/Overlay/Overlay";
import s from "@/components/Modals/ModalsTransition.module.css";
import {CSSTransition} from "react-transition-group";

interface Props {
    children: ReactNode
    isOpen: boolean
    setIsOpen: () => void
    className?: string
}

const Modal: FC<Props> = ({children, isOpen, setIsOpen, className}) => {

	return (
		<CSSTransition
			in={isOpen}
			classNames={{
				enterActive: "animate-open-modal",
				exitActive: "animate-close-modal"
			}}
			mountOnEnter
			unmountOnExit
			timeout={500}
		>
			<div
				className={"fixed top-0 bottom-0 right-0 left-0 z-[100] flex justify-center items-center"}>
				<Overlay onClick={setIsOpen}/>
				<div
					className={`bg-[#0A0A0A] p-5 py-10 shadow-md shadow-white/30 rounded-xl z-[1000] ${className}`}>
					{children}
				</div>
			</div>
		</CSSTransition>
	);
};

export default Modal;