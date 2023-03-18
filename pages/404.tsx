import { Button } from "flowbite-react";

const FourOhFour = () => {
	return (
		<div className='container mx-auto my-8 flex flex-col items-center justify-center px-5'>
			<h2 className='mb-8 text-9xl font-extrabold dark:text-gray-600'>
				<span className='sr-only'>Error</span>404
			</h2>
			<p className='mb-4 text-2xl font-semibold md:text-3xl'>
				Sorry, we couldn't find this page.
			</p>
			<p className='mb-8 dark:text-gray-400'>
				But dont worry, you can find plenty of other things on our
				homepage.
			</p>
			<Button
				href='/'
				className='rounded px-3 py-1 font-semibold dark:text-gray-900'
			>
				Back to homepage
			</Button>
		</div>
	);
};

export default FourOhFour;
