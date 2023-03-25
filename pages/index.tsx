import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

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
				<div className='w-full divide-y divide-gray-200 px-2 dark:divide-gray-700 md:w-9/12'>
					<section className='mb-4'>
						<SectionHeader
							id='active-contests'
							className='text-gradient-ptos-500 dark:bg-gradient-0 mb-2 text-2xl font-bold dark:text-primary-400'
						>
							Active Contests{" "}
							<span className='text-white'>🏆</span>
						</SectionHeader>
						<ul>
							{activeContests.map((contest, idx) => (
								<li
									key={idx}
									className='flex'
								>
									<Link
										href='#'
										className='mb-1 w-full rounded-sm border-l-4 px-3 py-2 hover:border-primary-500 hover:bg-primary-500/10'
									>
										{contest.name}
									</Link>
								</li>
							))}
						</ul>
					</section>
					<section className='mb-4 pt-4'>
						<SectionHeader
							id='problems'
							className='text-gradient-ptos-500 dark:bg-gradient-0 mb-2 text-2xl font-bold dark:text-primary-400'
						>
							Problems <span className='text-white'>💪</span>
						</SectionHeader>
						<ul>
							{problems.map((problem, idx) => (
								<li
									key={idx}
									className='flex'
								>
									<Link
										href='#'
										className='mb-1 w-full rounded-sm border-l-4 px-3 py-2 hover:border-primary-500 hover:bg-primary-500/10'
									>
										{problem.name}
									</Link>
								</li>
							))}
						</ul>
					</section>
					<section className='mb-4 pt-4'>
						<SectionHeader
							id='test'
							className='text-gradient-ptos-500 dark:bg-gradient-0 mb-2 text-2xl font-bold dark:text-primary-400'
						>
							Lorem ipsum dolor sit amet consectetur.{" "}
							<span className='text-white'>✒️</span>
						</SectionHeader>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta iusto corporis nihil? Quas saepe,
							adipisci corrupti quod illo eligendi voluptatem
							necessitatibus laborum hic dolorum, repellendus
							tenetur totam minus nulla sed molestias ex. Tempora
							earum ea consequuntur excepturi temporibus eum omnis
							ratione nemo, explicabo repellendus aut officiis
							distinctio nulla tempore, odit obcaecati vero at
							ipsum. Ullam id, est autem aliquam reiciendis veniam
							qui distinctio exercitationem error sed dolor alias
							doloribus excepturi omnis ex recusandae, corrupti
							voluptates tempore iure fuga illum consectetur. Cum
							omnis harum mollitia tempora, numquam consequuntur
							temporibus? Exercitationem ipsum asperiores
							laboriosam, quo eligendi sapiente dolorum ab fugit
							iste blanditiis cupiditate facilis et soluta maiores
							recusandae reprehenderit natus quam beatae voluptas
							sit assumenda nulla corporis? Ut cupiditate aliquam
							vero officia nostrum. Quidem ut blanditiis,
							accusamus quisquam vero reiciendis ullam laudantium
							reprehenderit vel nihil magni modi ipsum
							voluptatibus nesciunt recusandae doloribus maiores
							esse inventore eius a pariatur minima laborum
							tempora! Repellat quo quas deleniti nesciunt facilis
							beatae officiis sed autem nobis porro eveniet
							ducimus doloremque eos adipisci voluptatum aut
							quaerat quod rem, labore asperiores est magni
							aliquam! Velit alias error iure nostrum soluta id
							commodi doloremque sit quidem unde neque ut
							doloribus molestias consequuntur voluptate
							blanditiis nemo ullam harum dignissimos maxime,
							maiores atque aperiam et fugiat? Deleniti ut
							eligendi, repellat nisi inventore illum delectus
							cumque? Nemo ad cum eligendi perferendis eius natus
							asperiores dicta voluptatum officiis, consequuntur
							beatae. Autem, illo, possimus architecto et ullam
							libero accusamus iste deserunt, doloribus ipsam
							dignissimos. Cumque accusamus dolore aliquid animi
							dolores, id, velit itaque inventore corrupti nisi
							placeat deserunt odio blanditiis explicabo
							architecto minima a molestias, voluptas sunt illum
							eius adipisci. Praesentium reprehenderit quisquam
							provident cum nesciunt autem delectus necessitatibus
							ipsa quo doloremque nobis magnam distinctio
							explicabo consectetur, maxime amet non impedit
							voluptate commodi nihil facere. Tempore possimus
							odit, maxime soluta iure quaerat facere cum modi
							dignissimos labore earum odio natus dolore itaque
							officiis sed debitis! Veniam eligendi eveniet
							fugiat, necessitatibus molestiae porro excepturi
							ducimus dolor fuga quasi maxime, sunt ipsam omnis
							voluptates provident atque nobis dolorum ab! Odio,
							sunt eligendi. A nesciunt sed earum dolorum fugit
							assumenda, perspiciatis maiores accusantium rerum
							provident similique esse? Nostrum ea doloremque
							eaque incidunt commodi magni veniam? Nihil quos
							repellat consectetur facere quidem reprehenderit
							quas soluta! Repellendus ipsum quod tempora itaque,
							numquam commodi laborum atque nulla odit maiores,
							voluptatibus ipsam blanditiis minima facilis
							pariatur veritatis libero unde optio incidunt illum
							sint, doloribus quae. Corporis ipsum quasi, ducimus
							eum nostrum voluptas voluptatum nobis iste, eos
							explicabo molestiae temporibus, non magnam
							perspiciatis voluptates fugit sapiente excepturi!
							Consequuntur aspernatur rerum atque omnis itaque!
							Reprehenderit dolores suscipit cum dolor nemo. Quos
							inventore ad dolores omnis maiores corporis, aliquid
							obcaecati aut ut praesentium impedit, unde possimus
							adipisci amet nesciunt cupiditate ratione nam neque
							qui vero ea dolore. Mollitia autem eum quia magni
							dolorem architecto quibusdam laudantium, earum
							laboriosam voluptate asperiores doloribus quod
							dolorum. Officiis ut nesciunt excepturi harum ipsum
							esse quisquam dolor qui cupiditate, beatae, nostrum
							iste ratione accusantium laudantium! Reiciendis
							incidunt, commodi expedita nemo consequuntur
							nesciunt ducimus iste porro dolore. Architecto quis
							voluptates cupiditate animi, mollitia quasi eveniet
							saepe officia dolorum molestiae, quo dolorem itaque
							incidunt aspernatur! Eaque ut itaque exercitationem
							non? Nulla labore sapiente blanditiis optio quo ad
							illum, inventore magnam, aperiam veniam eos at minus
							eius cumque! Est magnam dicta tenetur? Quis
							doloribus animi suscipit qui at voluptates
							temporibus tempore quod molestiae maiores adipisci
							excepturi molestias eaque repellat, vero mollitia
							quae neque est ad saepe. Fugit voluptates autem
							molestiae delectus consequatur et explicabo natus
							hic dolore sapiente? Possimus earum blanditiis
							ipsum! Dignissimos, voluptatibus pariatur
							repudiandae maiores molestiae nihil molestias
							voluptates, accusantium, mollitia perspiciatis
							similique! Tenetur labore nesciunt nam natus, illo
							voluptate dolorum velit! Aut hic sunt sit ipsum
							porro provident ab repellendus laborum fugit nostrum
							itaque, labore eveniet quae odit repellat omnis! Ad,
							alias amet? Consectetur temporibus deserunt
							inventore quam voluptate alias reprehenderit error
							voluptas cum eveniet vel provident fuga a sed
							impedit, ad itaque quo dolore! Totam fuga minima
							quam fugiat facere magni beatae voluptatibus vitae,
							commodi, adipisci, ipsam ullam laudantium laboriosam
							reiciendis libero ipsum laborum autem! Non eius, a
							magni omnis harum optio debitis veritatis
							asperiores, quaerat dolore corrupti rem
							exercitationem magnam ipsam inventore id neque eum
							accusantium. Necessitatibus sed provident quidem
							aspernatur ea, sequi iste eveniet et iusto est
							eligendi aliquam? At soluta suscipit atque quia hic,
							harum voluptatibus cupiditate vitae fugit ipsa
							consequuntur maxime ullam eius ratione natus labore
							provident magnam dolorum quis a voluptates pariatur!
							Dignissimos magni, dolor, pariatur veniam facere
							eaque doloremque voluptatum fugit voluptates
							eligendi debitis eum amet numquam deserunt fuga
							veritatis deleniti eos earum eius distinctio
							necessitatibus vitae porro aliquid magnam? Qui
							adipisci at quasi, porro nesciunt labore aut libero
							placeat voluptatem fuga incidunt, mollitia ducimus
							explicabo aliquam recusandae enim expedita? Possimus
							totam, odio harum corrupti fuga aliquam expedita at
							ut blanditiis aperiam aut officia tenetur! Qui vero
							fugiat deserunt eius! Id, similique culpa. Delectus
							praesentium doloremque in, voluptates quo debitis
							sequi dolorem quae voluptatem facilis ad itaque
							aliquid amet magnam eligendi maiores incidunt
							repellendus placeat? Molestiae optio, praesentium
							error deleniti eos veritatis, esse quaerat corrupti
							aliquam distinctio fugiat odit earum officia magni
							quam delectus quo sapiente beatae culpa voluptate.
							Porro ad sunt, soluta deleniti minima nulla voluptas
							mollitia facilis autem dolorem optio eius. Maiores
							quia voluptatem nam nobis officia nemo. Consectetur
							suscipit reiciendis voluptates odio quas ipsam
							voluptas nobis consequatur, similique rerum neque
							culpa quis unde. Est, expedita. Molestias ab,
							consequatur incidunt tenetur esse sunt beatae
							debitis amet minima facere sit eligendi accusamus
							perferendis qui ad assumenda quasi est. Eos suscipit
							repellendus omnis incidunt molestias odio
							perspiciatis ipsam magnam quaerat commodi,
							praesentium aperiam ad laudantium numquam
							aspernatur. Ullam nostrum consectetur quisquam ad
							praesentium, sed obcaecati consequatur minus dolore
							aliquam modi itaque eaque odit recusandae quia
							mollitia cum. Illum iure porro ex, veritatis commodi
							incidunt totam maxime laborum, est sed sequi alias.
							Velit aliquam officiis nam explicabo. Adipisci
							deserunt eum delectus reiciendis ex quas, sed minus
							mollitia quaerat modi nobis. Corporis esse impedit
							temporibus expedita nesciunt, perferendis quam
							veniam labore vitae quas ipsum laborum enim quaerat
							atque tempora quos aut ut accusantium quae.
						</p>
					</section>
				</div>
				<div className='w-full px-2 md:w-3/12'>
					<section className='mb-4'>
						<div className='bg-glass-opaque rounded-xl bg-clip-padding p-5 shadow dark:shadow-xl'>
							<p>ciao</p>
						</div>
					</section>
				</div>
			</main>
		</>
	);
};

export default Home;
