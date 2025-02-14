import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{"My Demo Block - deployment version – hello from the saved content!"}
		</p>
	);
}
