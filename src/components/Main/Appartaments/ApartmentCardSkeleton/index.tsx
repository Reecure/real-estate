import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ApartmentCardSkeleton = () => {
	return (
		<>
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<div className={""}>
					<Skeleton height={450} />
					<div className={"flex justify-between mb-3 mt-2"}>
						<Skeleton width={100} height={30} />
						<Skeleton width={150} height={30} />
					</div>
					<Skeleton height={60} />
				</div>
			</SkeletonTheme>
		</>
	);
};

export default ApartmentCardSkeleton;
