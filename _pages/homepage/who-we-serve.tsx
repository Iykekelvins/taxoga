import { SERVECARDS } from '@/lib/mock';
import { Whatsapp } from '@/components/icons';

import Button from '@/components/button';
import Tag from '@/components/tag';
import Image from 'next/image';

export default function WhoWeServe() {
	return (
		<section className='bg-cream-peach px-gutter pt-[max(4.6875rem,63px)] pb-[max(13.1875rem,111px)]'>
			<div className='app-container'>
				<div className='space-y-[max(1.5rem,24px)]'>
					<Tag>Who We Serve</Tag>
					<h2 className='text-heading text-40 font-bold leading-[1.7]'>
						We are Experts for Every Tax Situation
					</h2>
					<p className='text-20 text-charcoal-grey leading-[1.7] -mt-[max(1rem,16px)]'>
						No matter your tax needs, file with confidence and get the most out of
						your return.
					</p>
				</div>

				<div className='mt-[max(2.5rem,40px)]'>
					<ul className='space-y-[max(2.5rem,40px)]'>
						{SERVECARDS.map((card, i) => (
							<li
								key={i}
								className='rounded-[max(5rem,40px)] p-[max(2.5rem,16px)]
                flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-[max(2.5rem,40px)]
                sticky top-[calc(20rem+var(--i)*0.75rem)]
                md:top-[calc(10rem+var(--i)*0.9rem)] lg:top-[calc(15rem+var(--i)*1rem)]
                des:top-[calc(6rem+var(--i)*1rem)]
                '
								style={
									{
										background: card.background,
										'--i': i,
									} as React.CSSProperties
								}>
								<div
									className={`space-y-[max(.625rem,10px)] ${
										i !== 1 ? 'text-white' : 'text-deep-green'
									} lg:max-w-[max(34.938rem,380px)] `}>
									<h3 className='text-30 font-bold leading-[1.6] lg:leading-loose'>
										{card.title}
									</h3>
									<p
										className={`text-20 leading-[1.7] italic ${i !== 1 ? 'text-extra-light-grey' : ''}`}>
										{card.intro}
									</p>
									<p
										className={`text-20 leading-[1.7] hidden lg:block ${i === 1 ? 'text-black' : ''}`}>
										{card.info}
									</p>

									<div className='flex flex-col lg:flex-row items-center gap-[max(1.5rem,24px)] mt-[max(1.5rem,24px)]'>
										<Button
											variant='primary-white'
											size='l'
											className='[&_svg_path]:fill-royal-blue font-bold hover:[&_svg_path]:fill-white w-full lg:w-fit'>
											<Whatsapp />
											<span>Speak with an Expert</span>
										</Button>
										<Button
											variant='secondary-white'
											size='l'
											className='font-bold w-full lg:w-fit'>
											Assess Your Tax Needs
										</Button>
									</div>
								</div>
								<div className='flex-1'>
									<figure>
										<Image
											src={card.image}
											width={550}
											height={449}
											className='w-full'
											alt={`A depiction of ${card.title}`}
										/>
									</figure>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
