type Props = {
	preview: string;
};

function PicturePreview({ preview }: Props) {
	return (
		<div
			className={
				"flex flex-col gap-6 border border-red-500 rounded overflow-clip"
			}
		>
			<img src={preview} alt={`preview ${preview}`} />
		</div>
	);
}

export default PicturePreview;
