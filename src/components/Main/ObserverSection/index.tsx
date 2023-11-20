import React, { useState, useEffect, useRef, FC } from "react";

type Props = {
  children: React.ReactNode;
};

const ObserverSection: FC<Props> = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const targetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ rootMargin: "-50px" }
		);

		if (targetRef.current) observer.observe(targetRef.current);

		return () => {
			if (targetRef.current) observer.unobserve(targetRef.current);};
	}, []);

	return (
		<div
			ref={targetRef}
			style={{
				opacity: isVisible ? 1 : 0,
				transition: "opacity 1s ease-in-out",
			}}
		>
			{children}
		</div>
	);
};

export default ObserverSection;
