type TagProps = {
	children: React.ReactNode;
	variant?: 'white' | 'gradient';
};

export default function Tag({ children, variant = 'white' }: TagProps) {
	return (
		<span
			className={`flex items-center justify-center h-[max(2.188rem,35px)] rounded-full
       px-[max(1rem,16px)] text-14 font-semibold w-fit
       ${variant === 'white' ? 'bg-white text-black' : ''}
      `}>
			{children}
		</span>
	);
}
