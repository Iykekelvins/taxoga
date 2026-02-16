import { Whatsapp } from '@/components/icons';

import Button from '@/components/button';
import Image from 'next/image';

export default function GetStarted() {
	return (
		<div className='px-gutter'>
			<div className='app-container'>
				<div
					className='bg-pale-indigo rounded-[max(2.5rem,40px)] 
        p-[max(2.5rem,24px)]'>
					<div
						className='flex flex-col lg:flex-row lg:items-center 
          justify-between gap-[max(1.5rem,24px)]'>
						<div className='space-y-[max(1.5rem,24px)]'>
							<h2 className='text-heading text-40 font-bold'>Get Started</h2>
							<p className='text-charcoal-grey text-20 leading-[1.7]'>
								Begin your tax journey the right way and stay compliant.
							</p>
							<div className='flex flex-col lg:flex-row items-center gap-[max(1.5rem,20px)]'>
								<Button
									variant='primary-blue'
									size='l'
									className='font-medium w-full lg:w-fit'>
									<Whatsapp />
									<span>Speak with an Expert</span>
								</Button>
								<Button
									variant='secondary-blue'
									size='l'
									className='font-bold w-full lg:w-fit'>
									Assess Your Tax Needs
								</Button>
							</div>
						</div>

						<div className='flex justify-center lg:justify-end'>
							<Image
								src='/home/get-started.webp'
								width={192}
								height={177}
								alt=''
								className='w-full lg:w-fit'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
