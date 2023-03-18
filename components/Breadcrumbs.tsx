import { BreadcrumbItem } from "@/types";
import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const convertBreadcrumb = (str: string): string => {
	str = str.replace(/-/g, " ");
	return str.length > 0
		? str[0].toUpperCase() + str.slice(1).toLowerCase()
		: "";
};

const MyBreadcrumb = () => {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState<
		Array<BreadcrumbItem> | undefined
	>(undefined);

	useEffect(() => {
		if (router) {
			const linkPath = router.asPath.split("/");
			linkPath.shift();

			const pathArray = linkPath
				.map((path, idx) => ({
					name: path,
					href: "/" + linkPath.slice(0, idx + 1).join("/"),
				}))
				.filter((item) => item.name !== "");

			setBreadcrumbs(pathArray);
		}
	}, [router]);

	if (!breadcrumbs) return null;

	return (
		<Breadcrumb className='mx-3 rounded-lg bg-gray-100 px-5 py-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800'>
			<Breadcrumb.Item
				href='/'
				icon={HomeIcon}
			>
				Home
			</Breadcrumb.Item>
			{breadcrumbs.length > 0
				? breadcrumbs.map((breadcrumb: BreadcrumbItem) => (
						<Breadcrumb.Item
							key={breadcrumb.name}
							href={breadcrumb.href}
						>
							{convertBreadcrumb(breadcrumb.name)}
						</Breadcrumb.Item>
				  ))
				: null}
		</Breadcrumb>
	);
};

export default MyBreadcrumb;
