import { CloudUpload } from "lucide-react";
import { ChangeEvent } from "react";

type Props = {
	onFileChange: (file: ChangeEvent<HTMLInputElement>) => void;
};

export default function ImageSelectorDropZone({ onFileChange }: Props) {
	return (
		<label
			htmlFor="dropzone-file"
			className="flex flex-col items-center justify-center w-full h-48 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
		>
			<div className="flex flex-col items-center justify-center pt-5 pb-6 px-6">
				<CloudUpload size={64} color="rgb(156, 163, 175)" />
				<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
					<span className="font-semibold">Choose a picture</span>
				</p>
				<p className="text-xs text-gray-500 dark:text-gray-400">
					JPEG or PNG
				</p>
			</div>
			<input
				id="dropzone-file"
				type="file"
				className="hidden"
				accept="image/*"
				onChange={onFileChange}
			/>
		</label>
	);
}
