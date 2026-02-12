import Image from 'next/image';

export default function ChatWidget() {
	return (
		<button
			className='bg-[linear-gradient(180deg,rgba(0,31,63,0.7)0%,rgba(0,51,102,0.7)100%)]
    h-[max(3.125rem,50px)] rounded-full px-[max(0.75rem,12px)] w-fit hidden md:flex items-center
    gap-2.5 fixed bottom-10 right-20
    '>
			<Image
				src='/home/tunde.png'
				width={32}
				height={32}
				alt='Tunde, agent to chat with'
			/>
			<span className='text-white text-14 font-bold'>Chat with Tunde</span>
		</button>
	);
}
