import { ReactElementContainer } from "@/types";
import { CgHashtag } from "react-icons/cg";

const SectionHeader = ({
	children,
	className = "",
	id,
}: ReactElementContainer) => {
	return (
		<h3
			className='classgroup group flex whitespace-pre-wrap'
			id={id}
			style={{ scrollMarginTop: "5rem" }}
		>
			<span className={className}>{children}</span>
			<a
				href={`#${id}`}
				className='ml-2 flex items-center border-0 opacity-0 group-hover:opacity-100'
				aria-label='Anchor'
			>
				<div className='bg-glass-opaque flex h-6 w-6 items-center justify-center rounded-md text-base font-normal text-gray-800 dark:text-gray-200'>
					<CgHashtag />
				</div>
			</a>
		</h3>
	);
};

export default SectionHeader;
