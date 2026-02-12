'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { TRUSTUSCARDS } from '@/lib/mock';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Tag from '@/components/tag';
import Image from 'next/image';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
export default function WhyTrustUs() {
	const cardsContainer = useRef<HTMLDivElement>(null);
	const cardsList = useRef<HTMLUListElement>(null);

	useGSAP(
		() => {
			const mm = gsap.matchMedia();

			mm.add('(min-width:1200px)', () => {
				gsap.to(cardsList.current, {
					x: () => -(cardsList.current!.scrollWidth - window.innerWidth) - 80,
					ease: 'none',
					scrollTrigger: {
						trigger: cardsContainer.current,
						// markers: true,
						pin: true,
						scrub: 1,
						start: 'bottom 90%',
						end: () => `+=${cardsList.current!.scrollWidth - window.innerWidth}`,
						invalidateOnRefresh: true,
						pinSpacing: true,
					},
				});
			});

			mm.add('(min-width:1024px) and (max-width:1190px)', () => {
				gsap.to(cardsList.current, {
					x: () => -(cardsList.current!.scrollWidth - window.innerWidth) - 80,
					ease: 'none',
					scrollTrigger: {
						trigger: cardsContainer.current,
						// markers: true,
						pin: true,
						scrub: 1,
						start: 'bottom 70%',
						end: () => `+=${cardsList.current!.scrollWidth - window.innerWidth}`,
						invalidateOnRefresh: true,
						pinSpacing: true,
					},
				});
			});

			return () => mm.revert();
		},
		{
			scope: cardsContainer,
		},
	);

	return (
		<section className='pt-[max(5rem,80px)]'>
			<div className='px-gutter'>
				<div className='app-container'>
					<div className='space-y-[max(1.5rem,24px)]'>
						<Tag variant='gradient'>Why Trust Us?</Tag>
						<h2 className='text-heading text-40 font-bold leading-[1.7]'>
							Work With Nigeria&apos;s Top Tax Experts
						</h2>
						<p className='text-20 text-charcoal-grey leading-[1.7] -mt-[max(1rem,16px)]'>
							Before the 2025 tax act, we filed 200 returns for 30 companies.
							We&apos;ve added great software to help more businesses and individuals
							stay compliant and maximize their tax returns.
						</p>
					</div>
				</div>
			</div>

			<div
				className='mt-[max(2.5rem,40px)] overflow-x-hidden
			px-gutter lg:px-0
			'
				ref={cardsContainer}>
				<ul
					className='flex flex-col lg:flex-row items-center gap-[max(5rem,40px)]'
					ref={cardsList}>
					{TRUSTUSCARDS.map((card, i) => (
						<li
							key={card.tagline}
							className={`flex flex-col-reverse lg:grid lg:grid-cols-2 lg:min-w-253.25
							rounded-[max(2.5rem,40px)] overflow-hidden self-stretch
							${i === 0 ? 'lg:ml-gutter' : i === TRUSTUSCARDS.length - 1 ? 'lg:mr-gutter' : ''}
						`}>
							<div
								className='flex flex-col gap-[max(1.25rem,16px)] 
								justify-center p-[max(1.5rem,24px)]'
								style={{
									background: card.background,
								}}>
								<h3 className='text-heading text-20'>{card.tagline}</h3>
								<h4 className='text-white text-36 font-bold leading-[1.2] tracking-tight'>
									{card.title}
								</h4>
								<p className='text-20 text-light-grey leading-[1.7] italic'>
									{card.intro}
								</p>
								<p className='text-white text-16 leading-[2.125]'>{card.info}</p>
								<h5 className='text-48 font-bold tracking-tight text-[#00134380]'>
									{card.bottomText}
								</h5>
							</div>
							<div className='h-full'>
								<figure className='relative h-full min-h-[max(40rem,270px)] lg:min-h-[max(31.3125rem,270px)]'>
									<Image
										src={`/home/trust-${i + 1}.webp`}
										fill
										alt={`An illustration of ${card.tagline}`}
										className={`object-cover
										${i === 1 ? 'object-top' : ''}	
										`}
									/>
								</figure>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
