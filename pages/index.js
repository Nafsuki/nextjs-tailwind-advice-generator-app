import { useState, useEffect } from 'react';

export default function Home() {
	// console.log(process.env.NEXT_PUBLIC_API_URL);
	const [quote, setQuote] = useState({
		id: 117,
		advice: `It is easy to sit up and take notice, what's difficult is getting
  up and taking action.`,
	});

	useEffect(() => {
		console.log('quote generated');
	}, [quote]);

	const getAdvice = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
		const data = await res.json();
		setQuote(data.slip);
		console.log(data.slip);
	};

	return (
		<div className='flex items-center justify-center w-screen h-screen min-h-[500px] px-1 galaxyFold:px-5 overflow-x-hidden font-extrabold text-center bg-darkBlue text-lightCyan font-manrope'>
			<main className='relative space-y-5 md:space-y-10 p-10 flex-col mx-5 my-20 w-[343px] md:w-[540px] h-[315px] md:h-[332px] bg-darkGrayishBlue rounded-[10px] flex items-center justify-center'>
				<h2 className='text-neonGreen text-headingS md:text-heading'>
					ADVICE #{quote.id}
				</h2>
				<div className='space-y-5 md:space-y-8 [295px] md:w-[444px]'>
					<h1 className='text-quoteS md:text-quote'>
						&#8220;{quote.advice}&#8221;
					</h1>

					<div className='md:hidden'>
						<svg width='295' height='16' xmlns='http://www.w3.org/2000/svg'>
							<g fill='none' fillRule='evenodd'>
								<path fill='#4F5D74' d='M0 8h122v1H0zM173 8h122v1H173z' />
								<g transform='translate(138)' fill='#CEE3E9'>
									<rect width='6' height='16' rx='3' />
									<rect x='14' width='6' height='16' rx='3' />
								</g>
							</g>
						</svg>
					</div>

					<div className='hidden md:block'>
						<svg width='444' height='16' xmlns='http://www.w3.org/2000/svg'>
							<g fill='none' fillRule='evenodd'>
								<path fill='#4F5D74' d='M0 8h196v1H0zM248 8h196v1H248z' />
								<g transform='translate(212)' fill='#CEE3E9'>
									<rect width='6' height='16' rx='3' />
									<rect x='14' width='6' height='16' rx='3' />
								</g>
							</g>
						</svg>
					</div>
				</div>
				<div
					onClick={getAdvice}
					className='transition hover:shadow-shadow hover:shadow-neonGreen cursor-pointer absolute bottom-[-32px] rounded-full bg-neonGreen w-[64px] h-[64px] flex justify-center items-center'
				>
					<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
							fill='#202733'
						/>
					</svg>
				</div>
			</main>
		</div>
	);
}
