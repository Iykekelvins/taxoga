import Button from '@/components/button';
import { Whatsapp } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<header
			className='bg-white border-b border-b-mid-grey border-solid
      px-[max(5rem,16px)] h-[max(4.7rem,62px)] sticky top-0 z-20
      flex items-center
      '>
			<nav className='flex items-center justify-between w-full max-w-container mx-auto'>
				<Link href='/'>
					<Image src='/logo.png' width={93} height={25} alt='TaxOga logo' />
				</Link>

				<div className='hidden lg:flex items-center gap-[max(2rem,24px)]'>
					<button className='hidden des:flex items-center gap-[max(0.5rem,8px)]'>
						<span className='text-near-black text-14'>Tax Resources</span>
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

					<Link href='/tax-calculator' className='text-royal-blue text-14 font-bold'>
						Tax Calculator
					</Link>
				</div>

				<div className='hidden lg:flex items-center gap-[max(2rem,24px)]'>
					<Link href='#' className='text-near-black text-14'>
						Pricing
					</Link>
					<Link href='#' className='text-near-black text-14'>
						Success Stories
					</Link>
				</div>

				<div className='hidden lg:flex items-center gap-[max(0.75rem,12px)]'>
					<Link
						href='#'
						className='text-charcoal-grey text-14 underline font-bold
            px-[max(1rem,14px)]
            '>
						Login
					</Link>

					<Button variant='primary-blue'>
						<Whatsapp />
						<span>Speak with an Expert</span>
					</Button>
					<Button variant='secondary-blue'>Seek Tax Support</Button>
				</div>

				<button className='grid gap-[max(0.5rem,8px)] lg:hidden'>
					<span className='h-[max(1.75px)] bg-black w-[max(24px)]' />
					<span className='h-[max(2px)] bg-black w-[max(24px)]' />
				</button>
			</nav>
		</header>
	);
}
