import { ReactElement } from "react";

export interface ReactElementContainer {
	children: ReactElement;
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
