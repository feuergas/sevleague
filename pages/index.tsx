import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ThemeSwitch from "@/components/ThemeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
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
			<main className='my-8'></main>
		</>
	);
};

export default Home;
