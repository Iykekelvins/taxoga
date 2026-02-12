import Link from 'next/link';

export default function Header({ fullPath }: { fullPath: string }) {
	const TAXTYPES = [
		{
			name: 'Personal Income',
			href: '/tax-calculator',
		},
		{
			name: 'Company Income Tax',
			href: '/tax-calculator?tax-type=company',
		},
	];

	return (
		<div className='flex flex-col items-center justify-center text-center'>
			<h1 className='text-36 text-heading font-bold'>Tax Calculator</h1>
			<p className='text-20 text-slate leading-[1.4] mt-[max(1.25rem,16px)]'>
				Calculate your tax liability under Nigeria&apos;s Tax Act 2025
			</p>

			<div
				className='mt-[max(2rem,24px)] bg-[#ECECF0] rounded-full
        h-[max(2.25rem,36px)] p-[max(0.25rem,4px)] flex items-center 
        justify-center w-full sm:w-fit
        '>
				{TAXTYPES.map((type) => (
					<Link
						key={type.name}
						href={type.href}
						className={`text-14 text-near-black font-medium
            h-full flex items-center justify-center rounded-full 
            px-[max(1.25rem,14px)] w-full sm:w-fit
            ${type.href === fullPath ? 'bg-white' : ''}
            `}>
						{type.name}
					</Link>
				))}
			</div>
		</div>
	);
}
