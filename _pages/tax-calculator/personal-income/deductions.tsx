export default function Deductions({
	deductionState,
	setDeductionState,
	totalDeductions,
}: {
	deductionState: DeductionState;
	setDeductionState: (deduction: DeductionState) => void;
	totalDeductions: number;
}) {
	const deductionInputs = [
		{
			id: 'rent',
			label: 'Rent (₦)',
		},
		{
			id: 'pensionContribution',
			label: 'Pension Contribution (₦)',
		},
		{
			id: 'nhfContribution',
			label: 'NHF Contribution (₦)',
		},
		{
			id: 'lifeInsurance',
			label: 'Life Insurance (₦)',
		},
		{
			id: 'nhisPremium',
			label: 'NHIS Premium (₦)',
		},
		{
			id: 'gratitude',
			label: 'Gratuity (₦)',
		},
	];

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		const rawValue = value.replace(/,/g, '');

		if (!/^\d*$/.test(rawValue)) return;

		const formattedValue = rawValue ? Number(rawValue).toLocaleString() : '';

		setDeductionState({
			...deductionState,
			[name]: formattedValue,
		});
	};

	return (
		<div
			className='border border-border border-solid bg-white
				rounded-[max(1.5rem,24px)] p-[max(1.5rem,24px)]
				'>
			<h2 className='text-near-black text-24 font-bold'>Allowable Deductions</h2>
			<p className='text-charcoal text-14 mt-[max(0.5rem,8px)] leading-[1.7]'>
				Enter the annual amount of any of the following allowable deductions
			</p>

			<div className='space-y-[max(1rem,16px)] mt-[max(1.5rem,24px)]'>
				{deductionInputs.map((input) => (
					<div key={input.id} className='space-y-[max(0.5rem,8px)] grid'>
						<label
							htmlFor={input.id}
							className='text-14 text-near-black font-medium'>
							{input.label}
						</label>
						<input
							type='text'
							min={0}
							name={input.id}
							id={input.id}
							value={deductionState[input.id as keyof DeductionState]}
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
				<p className='text-charcoal text-16'>Total Deductions</p>
				<h3 className='text-20 font-bold text-royal-blue'>
					₦{totalDeductions.toLocaleString()}
				</h3>
			</div>
		</div>
	);
}
