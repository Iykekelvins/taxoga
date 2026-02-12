'use client';

import { useEffect, useRef, useState } from 'react';

import Tag from '@/components/tag';
import gsap from 'gsap';

export default function Faqs() {
	const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

	return (
		<section className='pt-[max(5rem,80px)] px-gutter pb-[max(4.5rem,70px)]'>
			<div className='app-container'>
				<div className='space-y-[max(1.5rem,24px)]'>
					<Tag variant='gradient'>FAQs</Tag>
					<h2 className='text-heading text-40 font-bold leading-[1.7]'>
						Your Questions, Answered.
					</h2>
					<p className='text-20 text-charcoal-grey leading-[1.7] -mt-[max(1rem,16px)]'>
						Find answers to the most common questions people ask.
					</p>
				</div>

				<div className='mt-[max(2.5rem,40px)]'>
					<ul className='space-y-[max(1rem,16px)]'>
						{[...Array(3)].map((_, i) => (
							<Faq
								key={i}
								index={i}
								selectedFaq={selectedFaq}
								setSelectedFaq={setSelectedFaq}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

function Faq({
	index,
	selectedFaq,
	setSelectedFaq,
}: {
	index: number;
	selectedFaq: number | null;
	setSelectedFaq: (e: number | null) => void;
}) {
	const content = useRef<HTMLDivElement>(null);
	const isFaqSelected = selectedFaq === index;

	useEffect(() => {
		if (isFaqSelected) {
			gsap.to(content.current, {
				height: 'auto',
				duration: 0.3,
			});
		} else {
			gsap.to(content.current, {
				height: 0,
				duration: 0.3,
			});
		}
	}, [isFaqSelected]);

	return (
		<li
			className='border border-[#0000001A] border-solid rounded-[max(0.75rem,12px)]
    '>
			<button
				className='p-[max(1.5rem,24px)] text-18 text-near-black font-semibold
      w-full text-left flex items-center justify-between
      '
				onClick={() => setSelectedFaq(isFaqSelected ? null : index)}>
				<span>What is included in audit protection?</span>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={`transition-transform duration-300 ease-in-out 
          ${isFaqSelected ? '-rotate-180' : ''}`}>
					<path
						d='M4 6L9 11L14 6'
						stroke='#717182'
						strokeWidth='1.33333'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
			<div className='h-0 overflow-hidden' ref={content}>
				<p
					className='text-charcoal-grey text-14 leading-[1.7]
        px-[max(1.5rem,24px)] pb-[max(1.25rem,20px)]
        '>
					Tax audit protection typically includes services that help you navigate the
					complexities of an audit. This can involve professional representation,
					assistance with documentation, and guidance on how to respond to inquiries
					from tax authorities. Additionally, it may cover the costs associated with
					legal fees and any potential penalties, ensuring you have support
					throughout the audit process.
				</p>
			</div>
		</li>
	);
}
