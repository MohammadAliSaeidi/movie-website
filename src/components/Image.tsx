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
	const [error, setError] = useState<string | undefined>();

	useEffect(() => {
		const image = new Image();
		image.src = props.src ?? "";
		image.onload = () => setIsLoading(false);
		image.onerror = () => {
			setIsLoading(false);
			setError("Failed to load image");
		};
	}, [props.src]);

	const handleImageLoad = () => {
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
			{isLoading && (
				<Skeleton className={"absolute top-o left-0 w-full h-full "} />
			)}
			<img
				src={props.src}
				alt={props.alt}
				loading={props.loading}
				className={
					`w-full h-full ${
						isLoading ? "hidden" : "block"
					} absolute top-0 left-0 ` + props.className
				}
				onLoad={handleImageLoad}
				onError={() => setError("Failed to load image")}
			/>
			{error && <div>Error: {error}</div>}
		</div>
	);
};

export default ImageWithSkeleton;
