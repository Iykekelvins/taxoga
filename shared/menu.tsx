import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { Whatsapp } from '@/components/icons';

import Button from '@/components/button';
import Link from 'next/link';

export default function Menu({
	openMenu,
	setOpenMenu,
}: {
	openMenu: boolean;
	setOpenMenu: (menu: boolean) => void;
}) {
	const lenis = useLenis();

	useEffect(() => {
		if (!lenis) return;

		// disable scroll when menu is open
		if (openMenu) {
			lenis.stop();
		} else {
			lenis.start();
		}
	}, [lenis, openMenu]);

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-white 
      lg:hidden p-gutter transition-transform duration-500 ease
      ${!openMenu ? 'translate-x-full' : 'translate-x-0'}
      `}>
			<div className='flex flex-col justify-between pt-[max(64px)] h-full'>
				<div className='space-y-[max(2rem,24px)]'>
					<button className='flex items-center gap-[max(0.5rem,8px)]'>
						<span className='text-near-black text-24'>Tax Resources</span>
						<svg
							width='10'
							height='6'
							viewBox='0 0 10 6'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0.666687 0.666626L4.66669 4.66663L8.66669 0.666626'
								stroke='black'
								strokeWidth='1.33333'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>

					<Link
						href='/tax-calculator'
						className='text-royal-blue text-24 font-bold block'
						onClick={() => setOpenMenu(false)}>
						Tax Calculator
					</Link>

					<Link
						href='#'
						className='text-near-black text-24 block'
						onClick={() => setOpenMenu(false)}>
						Pricing
					</Link>
					<Link
						href='#'
						className='text-near-black text-24 block'
						onClick={() => setOpenMenu(false)}>
						Success Stories
					</Link>
				</div>

				<div className='flex flex-col gap-[max(2rem,24px)]'>
					<Link
						href='#'
						className='text-charcoal-grey text-24 underline font-bold
            '
						onClick={() => setOpenMenu(false)}>
						Login
					</Link>

					<Button variant='primary-blue' onClick={() => setOpenMenu(false)}>
						<Whatsapp />
						<span>Speak with an Expert</span>
					</Button>
					<Button variant='secondary-blue' onClick={() => setOpenMenu(false)}>
						Seek Tax Support
					</Button>
				</div>
			</div>
		</div>
	);
}
