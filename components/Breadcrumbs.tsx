import { BreadcrumbItem } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const convertBreadcrumb = (str: string): string => {
	str = str.replace(/-/g, " ");
	return str.length > 0
		? str[0].toUpperCase() + str.slice(1).toLowerCase()
		: "";
};

const isLocal = (ref: string) => {
	return true;
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
				.filter((item) => item.name !== "" && item.name[0] != "#");
			const breadcrumbArray = pathArray;

			setBreadcrumbs(breadcrumbArray);
		}
	}, [router]);

	if (!breadcrumbs) return null;

	return (
		<nav
			className='bg-glass-opaque mx-3 mb-4 flex rounded-lg px-5 py-3'
			aria-label='Breadcrumb'
		>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<Link
						href='/'
						className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white'
					>
						<HomeIcon className='mr-2 h-4 w-4' />
						Home
					</Link>
				</li>
				{breadcrumbs.length > 0
					? breadcrumbs.map(
							(breadcrumb: BreadcrumbItem, idx: number) => (
								<li key={idx}>
									<div className='flex items-center'>
										<ChevronRightIcon className='h-6 w-6 text-gray-400' />
										<Link
											href={breadcrumb.href}
											className='text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ml-2'
										>
											{convertBreadcrumb(breadcrumb.name)}
										</Link>
									</div>
								</li>
							)
					  )
					: null}
			</ol>
		</nav>
	);
};

export default MyBreadcrumb;
