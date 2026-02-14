'use client';

import { useState, useRef, useEffect } from 'react';
import { useLenis } from 'lenis/react';

interface DropdownOption {
	value: string;
	label: string;
}

interface DropdownProps {
	label: string;
	options: DropdownOption[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	identifier?: string;
	payload?: Record<string, string>;
	setPayload?: (payload: Record<string, string>) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
	label,
	options,
	value,
	onChange,
	placeholder = 'Select an option',
	className = '',
	disabled = false,
	identifier,
	payload,
	setPayload,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const lenis = useLenis();

	const selectedOption = options.find((opt) => opt.value === value);

	const handleSelect = (optionValue: string) => {
		onChange?.(optionValue);
		if (setPayload && identifier) {
			setPayload({
				...payload,
				[identifier]: optionValue,
			});
		}
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	useEffect(() => {
		if (!lenis) return;
		if (isOpen) {
			lenis?.stop();
		} else {
			lenis?.start();
		}
	}, [isOpen, lenis]);

	return (
		<div
			ref={dropdownRef}
			className={`relative space-y-[max(0.5rem,8px)] ${className}`}>
			<span className='text-14 text-near-black font-medium block'>{label}</span>
			{/* Trigger Button */}
			<button
				type='button'
				onClick={() => !disabled && setIsOpen(!isOpen)}
				disabled={disabled}
				className={`
					w-full px-[max(0.75rem,12px)] h-[max(2.813rem,45px)] text-left border border-mid-grey border-solid rounded-[max(0.5rem,8px)]
					flex items-center justify-between text-14
					${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-near-black cursor-pointer'}
					${isOpen ? 'border-near-black' : ''}
				`}>
				<span className={selectedOption ? '' : 'text-[#717182]'}>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<svg
					className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div
					className='absolute z-10 w-full mt-1 bg-white border border-mid-grey rounded-[max(0.5rem,8px)] shadow-lg max-h-[max(15rem,300px)] overflow-auto'
					data-lenis-prevent>
					{options.length === 0 ? (
						<div className='px-[max(1rem,16px)] py-[max(0.5rem,8px)] text-[#717182] text-14'>
							No options available
						</div>
					) : (
						options.map((option) => (
							<button
								key={option.value}
								type='button'
								onClick={() => handleSelect(option.value)}
								className={`
									w-full px-4 py-2 text-12 text-left hover:bg-gray-100 transition-colors
                  flex items-center justify-between
									${option.value === value ? 'text-near-black font-medium' : 'text-[#717182]'}
								`}>
								<span>{option.label}</span>
								{option.value === value && (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='#2c59c3'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<polyline points='20 6 9 17 4 12'></polyline>
									</svg>
								)}
							</button>
						))
					)}
				</div>
			)}
		</div>
	);
};
