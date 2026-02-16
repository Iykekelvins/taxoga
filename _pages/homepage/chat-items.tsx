'use client';

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ChatIcon } from '@/components/icons';

import gsap from 'gsap';

export default function ChatItems() {
	const chatItemsRef = useRef<HTMLDivElement>(null);
	const [playAnimation, setPlayAnimation] = useState(false);
	const animation = useRef<GSAPTween>(null);

	useGSAP(() => {
		animation.current = gsap
			.to("[data-selector='chat-item-box']", {
				top: 0,
				opacity: 0,
				stagger: 0.02,
				ease: 'power1.inOut',
				pointerEvents: 'none',
			})
			.pause();
	});

	useEffect(() => {
		if (playAnimation) {
			animation.current?.play();
		} else {
			animation.current?.reverse();
		}
	}, [playAnimation]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				chatItemsRef.current &&
				!chatItemsRef.current.contains(event.target as Node)
			) {
				setPlayAnimation(true);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div
			className='flex items-center justify-center mt-[max(3rem,48px)] px-gutter'
			ref={chatItemsRef}>
			<div className='relative w-full flex items-center justify-center'>
				<button
					className='flex items-center justify-center h-[max(4.063rem,65px)]
					min-w-[max(4.063rem,65px)]
        bg-royal-blue rounded-[max(0.75rem,12px)]
        '
					onClick={() => setPlayAnimation(!playAnimation)}>
					<ChatIcon />
				</button>
				<div
					className='border border-royal-blue border-solid bg-white
        sm:flex items-center gap-[max(1.5rem,24px)] h-[max(7.063rem,113px)]
        w-[max(42.563rem,360px)] max-sm:w-full p-[max(1.5rem,24px)] rounded-[max(2rem,32px)]
        shadow-[0px_0px_4px_4px_#2C59C34D] absolute left-1/2 -translate-x-1/2
        -top-[max(7rem,112px)] z-2 hidden
        '
					data-selector='chat-item-box'>
					<div
						className='flex items-center justify-center h-[max(4.063rem,65px)]
						min-w-[max(4.063rem,65px)]
        bg-royal-blue rounded-[max(0.75rem,12px)]
        '>
						<ChatIcon />
					</div>
					<div>
						<h3 className='text-18 font-bold'>I am Tunder</h3>
						<p className='text-16 font-medium mt-[max(0.5rem,8px)] leading-normal'>
							Ask me anything about taxes in Nigeria.
						</p>
					</div>
				</div>
				<div
					className='border border-royal-blue border-solid bg-white
        flex items-center gap-[max(1.5rem,24px)] h-[max(7.063rem,113px)]
        w-[max(42.563rem,360px)] max-sm:w-full p-[max(1.5rem,24px)] rounded-[max(2rem,32px)]
        shadow-[0px_0px_4px_4px_#2C59C34D] absolute left-1/2 sm:left-[52%] -translate-x-1/2
         -top-[max(112px)] sm:-top-[max(13rem,208px)] z-2
        '
					data-selector='chat-item-box'>
					<div
						className='flex items-center justify-center h-[max(4.063rem,65px)]
						min-w-[max(4.063rem,65px)]
        bg-royal-blue rounded-[max(0.75rem,12px)]
        '>
						<ChatIcon />
					</div>
					<div>
						<h3 className='text-18 font-bold'>Did You Know? </h3>
						<p className='text-16 font-medium mt-[max(0.5rem,8px)] leading-normal'>
							You dona&apos;t need to pay tax if you earn more than N50 Million Naira
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
