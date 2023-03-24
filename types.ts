import { ReactElement } from "react";

export interface ReactElementContainer {
	id: string | undefined;
	children?: React.ReactNode;
	className?: string | undefined;
}

export interface BreadcrumbItem {
	name: string;
	href: string;
}

export interface Theme {
	name: string;
	value: string;
	icon: ReactElement;
}
