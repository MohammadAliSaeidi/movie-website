import React, { useEffect, useState } from "react";
import PicturePreview from "./PicturePreview";
import ImageSelectorDropZone from "./ImageSelectorDropZone";

type Props = {
	onChange: (file: File) => void;
	value?: Blob | MediaSource;
};

const ImageSelector = ({ onChange, value }: Props) => {
	const [preview, setPreview] = useState<string>();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files !== null) {
			const fileUrl: string = URL.createObjectURL(files[0]);
			setPreview(fileUrl);
			onChange(files[0]);
		}
	};

	useEffect(() => {
		console.log("Image value", value);
		if (value) {
			setPreview(URL.createObjectURL(value));
		}
	}, [value]);

	return (
		<div className="rounded overflow-hidden">
			{preview !== undefined ? (
				<PicturePreview preview={preview} />
			) : (
				<ImageSelectorDropZone onFileChange={handleFileChange} />
			)}
		</div>
	);
};

export default ImageSelector;
