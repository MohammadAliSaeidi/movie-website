import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ImageWithSkeletonProps {
	src?: string;
	alt?: string;
	width?: number;
	height?: number;
	skeletonColor?: string;
	skeletonOpacity?: number;
	loading?: "lazy" | "eager";
	className?: string;
	onImageLoaded?: () => void;
	containerClassName?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [imageSrc, setImageSrc] = useState<string | undefined>();
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const image = new Image();
		image.src = props.src ?? "";
		image.loading = props.loading ?? "eager";
		image.onloadstart = () => setIsLoading(true);
		image.onload = () => handleImageLoad(image.src);
		image.onerror = () => {
			setIsLoading(false);
			setIsError(true);
		};
	}, [props.src]);

	const handleImageLoad = (imageSrc: string) => {
		setIsLoading(false);
		setImageSrc(imageSrc);
		if (props.onImageLoaded) props.onImageLoaded();
	};

	return (
		<div
			className={"relative overflow-hidden " + props.containerClassName}
			style={{
				width: props.width,
				height: props.height,
			}}
		>
			{isLoading ? (
				<Skeleton className="absolute bottom-0 h-full w-full left-0 right-0 top-0" />
			) : isError ? null : (
				imageSrc && (
					<img
						src={imageSrc}
						alt=""
						className={
							`w-full h-full ${
								isLoading ? "hidden" : "block"
							} absolute top-0 left-0 ` + props.className
						}
					/>
				)
			)}
		</div>
	);
};

export default ImageWithSkeleton;
