type TagProps = {
	children: React.ReactNode;
	variant?: 'white' | 'gradient';
};

export default function Tag({ children, variant = 'white' }: TagProps) {
	return (
		<span
			className={`flex items-center justify-center h-[max(2.188rem,35px)] rounded-full
       px-[max(1rem,16px)] text-14 font-semibold w-fit
       ${
					variant === 'white'
						? 'bg-white text-black'
						: 'text-white bg-[linear-gradient(180deg,#001F3F_0%,#003366_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]'
				}
      `}>
			{children}
		</span>
	);
}
