import { ReactElementContainer } from "@/types";
import MyBreadcrumb from "./Breadcrumbs";
import Footer from "./Footer";
import MyNavBar from "./Navbar";

const Layout = ({ children }: ReactElementContainer) => {
	return (
		<>
			<div className='flex min-h-screen flex-col'>
				<MyNavBar />
				<MyBreadcrumb />
				<div className='relative'>{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
