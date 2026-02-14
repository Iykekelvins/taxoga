export default function IncomeSources({
	incomeState,
	setIncomeState,
	totalIncome,
}: {
	incomeState: IncomeState;
	setIncomeState: (income: IncomeState) => void;
	totalIncome: number;
}) {
	const incomeInputs = [
		{
			id: 'salaryIncome',
			label: 'Salary/Employment Income (₦)',
		},
		{
			id: 'businessIncome',
			label: 'Business Income (₦)',
		},
		{
			id: 'rentalIncome',
			label: 'Rental Income (₦)',
		},
		{
			id: 'investmentIncome',
			label: 'Investment Income (₦)',
		},
		{
			id: 'otherIncome',
			label: 'Other Income (₦)',
		},
	];

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		const rawValue = value.replace(/,/g, '');

		if (!/^\d*$/.test(rawValue)) return;

		const formattedValue = rawValue ? Number(rawValue).toLocaleString() : '';

		setIncomeState({
			...incomeState,
			[name]: formattedValue,
		});
	};

	return (
		<div
			className='border border-border border-solid bg-white
				rounded-[max(1.5rem,24px)] p-[max(1.5rem,24px)]
				'>
			<h2 className='text-near-black text-24 font-bold'>Income Sources</h2>
			<p className='text-charcoal text-14 mt-[max(0.5rem,8px)] leading-[1.7]'>
				Enter your annual income from all your income sources.
			</p>

			<div className='space-y-[max(1rem,16px)] mt-[max(1.5rem,24px)]'>
				{incomeInputs.map((input) => (
					<div key={input.id} className='space-y-[max(0.5rem,8px)] grid'>
						<label
							htmlFor={input.id}
							className='text-14 text-near-black font-medium'>
							{input.label}
						</label>
						<input
							type='value'
							min={0}
							name={input.id}
							id={input.id}
							value={incomeState[input.id as keyof IncomeState]}
							onChange={handleInputChange}
							placeholder='0'
							className='h-[max(2.813rem,45px)] border border-[#E9E9E9] border-solid rounded-[max(0.5rem,8px)]
              px-[max(0.75rem,12px)] transition-all duration-300 ease-in-out focus-within:border-near-black
              outline-0 text-near-black text-14 placeholder:text-[#717182]
              '
						/>
					</div>
				))}
			</div>

			<div
				className='mt-[max(1rem,16px)] pt-[max(1rem,16px)] border-t border-t-border
      border-solid flex items-center justify-between
      '>
				<p className='text-charcoal text-16'>Total Income</p>
				<h3 className='text-20 font-bold text-royal-blue'>
					₦{totalIncome.toLocaleString()}
				</h3>
			</div>
		</div>
	);
}
