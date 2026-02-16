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
					? `bg-royal-blue border-royal-blue text-white des:hover:bg-transparent 
        des:hover:text-royal-blue des:hover:[&_svg_path]:fill-royal-blue`
					: ''
			}
      ${
				variant === 'primary-white'
					? 'bg-white border-white text-royal-blue des:hover:bg-transparent des:hover:text-white'
					: ''
			}
      ${
				variant === 'secondary-blue'
					? 'border-royal-blue text-royal-blue des:hover:text-white des:hover:bg-royal-blue'
					: ''
			}
      ${
				variant === 'secondary-white'
					? 'border-white text-white des:hover:text-royal-blue des:hover:bg-white'
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
