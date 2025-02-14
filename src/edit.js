import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit() {
	return (
		<p {...useBlockProps()}>
			{__(
				"My Demo Block - deployment version – hello from the editor!",
				"create-block/my-demo-block-plugin-deployments-version",
			)}
		</p>
	);
}
