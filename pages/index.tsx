import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ThemeSwitch from "@/components/ThemeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Card } from "flowbite-react";

const Home = () => {
	const activeContests = [
		{
			name: "Gara figa",
		},
		{
			name: "Garetta di pasquetta",
		},
		{
			name: "Round magico",
		},
	];

	const problems = [
		{
			name: "Il tavolo",
		},
		{
			name: "Tetragonuro??",
		},
		{
			name: "Alberto e Beatrice",
		},
	];

	return (
		<>
			<Head>
				<title>SevLeague</title>
				<meta
					name='description'
					content='Math contests and problems app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<main className='flex w-full flex-col md:flex-row'>
				<div className='mx-2 w-full divide-y divide-gray-200 dark:divide-gray-700 md:w-9/12'>
					<section
						className='mb-4'
						id='active-contests'
					>
						<h2 className='mb-2 text-2xl font-bold'>
							<span className='text-gradient-primary'>
								Active contests
							</span>
						</h2>
						<ul>
							{activeContests.map((contest, idx) => (
								<li
									key={idx}
									className='flex'
								>
									<a
										href='#'
										className='mb-1 w-full rounded-sm border-l-4 px-3 py-2 hover:border-primary-500 hover:bg-primary-500/10'
									>
										{contest.name}
									</a>
								</li>
							))}
						</ul>
					</section>
					<section
						className='mb-4'
						id='problems'
					>
						<h2 className='mb-2 text-2xl font-bold'>
							<span className='text-gradient-primary'>
								Problems
							</span>
						</h2>
						<ul>
							{problems.map((problem, idx) => (
								<li
									key={idx}
									className='flex'
								>
									<a
										href='#'
										className='mb-1 w-full rounded-sm border-l-4 px-3 py-2 hover:border-primary-500 hover:bg-primary-500/10'
									>
										{problem.name}
									</a>
								</li>
							))}
						</ul>
					</section>
					<section className='mb-4'>
						<h2 className='mb-2 text-2xl font-bold'>
							<span className='text-gradient-primary'>Test</span>
						</h2>
					</section>
				</div>
				<div className='w-full md:w-3/12'>
					<section className='mb-4'>
						<div className='rounded-xl bg-white/5 bg-clip-padding p-5 shadow dark:shadow-xl'>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Accusantium voluptatem
								blanditiis officiis facilis ipsam atque
								obcaecati iure laboriosam provident, optio
								nesciunt saepe magni molestiae deleniti commodi,
								sed eligendi! Cum temporibus eius porro facere
								vitae aliquid, esse doloremque repudiandae
								delectus mollitia, aliquam qui, reiciendis
								deleniti libero praesentium vero! Perferendis,
								sint cupiditate ullam maiores, quaerat totam
								accusantium aperiam consequuntur quod molestias
								neque esse eum repudiandae facere ipsam?
								Voluptatem reprehenderit tempore et voluptatibus
								quia alias labore modi deleniti ex, dolorem,
								exercitationem libero fugiat beatae asperiores
								possimus quidem nihil ducimus nam fuga ad?
								Quidem molestiae commodi nam nostrum, voluptatum
								expedita nemo nulla magnam ducimus!
							</p>
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default Home;
