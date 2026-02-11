type ButtonProps = {
	children: React.ReactNode;
	variant: 'primary-blue' | 'primary-white' | 'secondary-blue' | 'secondary-white';
	size?: 'm' | 'l';
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
};

export default function Button({
	children,
	variant,
	size = 'm',
	className,
	disabled,
	onClick,
}: ButtonProps) {
	return (
		<button
			className={`flex items-center justify-center gap-[max(0.5rem,8px)] rounded-[max(0.75rem,12px)] 
      border-2 border-solid px-[max(1rem,16px)] text-14
      ${
				variant === 'primary-blue'
					? `bg-royal-blue border-royal-blue text-white hover:bg-transparent 
        hover:text-royal-blue hover:[&_svg_path]:fill-royal-blue`
					: ''
			}
      ${
				variant === 'primary-white'
					? 'bg-white border-white text-royal-blue hover:bg-transparent hover:text-white'
					: ''
			}
      ${
				variant === 'secondary-blue'
					? 'border-royal-blue text-royal-blue hover:text-white hover:bg-royal-blue'
					: ''
			}
      ${size === 'm' ? 'h-[max(2.5rem,40px)]' : ''}
      ${size === 'l' ? 'h-[max(3.125rem,50px)]' : ''}
      ${className}
      `}
			disabled={disabled}
			onClick={onClick}>
			{children}
		</button>
	);
}
