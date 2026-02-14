type TaxBreakdownProps = {
	brackets: Bracket[];
	isCompany?: boolean;
};

type Bracket = {
	name: string;
	info: string;
	payable_amount: number;
	percentage: number;
};

export default function TaxBreakdown({ brackets, isCompany }: TaxBreakdownProps) {
	return (
		<div
			className='border border-border border-solid bg-white
				rounded-[max(1.5rem,24px)] p-[max(1.5rem,24px)]
				'>
			<h2 className='text-near-black text-24 font-bold'>Tax Breakdown by Bracket</h2>

			{brackets.length === 0 ? (
				<p className='text-14 text-charcoal text-center mt-[max(2.5rem,20px)] leading-[1.4]'>
					{!isCompany
						? 'Enter your income details and click "Calculate Tax" to see your tax breakdown.'
						: 'Enter your business details to see your tax breakdown.'}
				</p>
			) : (
				<ul className='space-y-[max(0.75rem,12px)] mt-[max(1.5rem,24px)]'>
					{brackets.map((bracket) => (
						<li key={bracket.name} className='space-y-[max(0.5rem,8px)]'>
							<div className='flex items-center justify-between'>
								<p className='text-night-grey text-14 font-bold leading-[1.7]'>
									{bracket.name}
								</p>
								<p className='text-right text-14 leading-[1.7]'>
									₦{bracket.payable_amount.toLocaleString()}
								</p>
							</div>

							<div className='relative overflow-hidden h-[max(0.5rem,8px)] rounded-full bg-[#E5E7EB]'>
								<div
									className='absolute top-0 left-0 h-full rounded-full bg-royal-blue'
									style={{
										width: `${bracket.percentage}%`,
									}}
								/>
							</div>

							<p className='text-12 text-cool-grey leading-[1.3]'>{bracket.info}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
