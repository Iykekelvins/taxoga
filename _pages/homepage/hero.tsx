import { Whatsapp } from '@/components/icons';

import Button from '@/components/button';
import Image from 'next/image';

export default function Hero() {
	return (
		<section
			className='bg-[linear-gradient(180deg,#001F3F_0%,#003366_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
		 pt-[max(5rem,40px)] pb-[max(7.313rem,40px)] relative px-gutter'>
			<div className='max-w-container mx-auto'>
				<div className='flex flex-col lg:flex-row lg:items-center lg:gap-9.25 justify-between'>
					<div className='sm:max-w-[max(420px,33.5rem)]'>
						<h1 className='text-white text-48 font-bold leading-normal'>
							Avoid <span className='text-sky-blue'>Tax Wahala!</span> Stay Compliant
							While Paying the Lowest Possible Taxes.
						</h1>
						<p className='text-20 text-light-grey-2 mt-[max(1.5rem,24px)]'>
							No matter your tax needs, our tax experts will help you file with
							confidence and get the most value when you file your taxes.
						</p>
						<div
							className='flex items-center gap-[max(1.625rem,26px)] mt-[max(2.5rem,40px)]
							flex-col des:flex-row
						'>
							<Button variant='primary-blue' size='l' className='w-full font-bold'>
								<Whatsapp /> <span>Speak with an Expert</span>
							</Button>
							<Button variant='primary-white' size='l' className='w-full font-bold'>
								Assess Your Tax Needs
							</Button>
						</div>
					</div>

					<div className=' mt-[max(95px)] lg:mt-0'>
						<figure>
							<Image
								src='/home/hero-img.png'
								width={639}
								height={604.88}
								className='w-full'
								alt='A man holding up a phone, with two boxes describing his tax estimated refund'
							/>
						</figure>
					</div>
				</div>
			</div>

			<Image
				src='/home/hero-layers.png'
				fill
				alt=''
				className='pointer-events-none'
			/>
		</section>
	);
}
