import { ReactElementContainer } from "@/types";
import classNames from "classnames";
import MyBreadcrumb from "./Breadcrumbs";
import Footer from "./Footer";
import MyNavBar from "./Navbar";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

const Layout = ({ children }: ReactElementContainer) => {
	return (
		<>
			<div
				className={classNames(
					"bg-wallpaper flex min-h-screen flex-col",
					font.className
				)}
			>
				<MyNavBar />
				<MyBreadcrumb />
				<div className='relative mx-3 flex'>{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
