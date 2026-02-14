type IncomeSummaryProps = {
	gross_income: number | undefined;
	deductions: number | undefined;
	taxPaid: number | undefined;
};

export default function IncomeSummary({
	gross_income = 0,
	deductions = 0,
	taxPaid = 0,
}: IncomeSummaryProps) {
	return (
		<div
			className='border border-border border-solid bg-white
				rounded-[max(1.5rem,24px)] p-[max(1.5rem,24px)]
				'>
			<h2 className='text-24 text-near-black font-bold'>Income Summary</h2>

			<div className='mt-[max(1.5rem,24px)] space-y-[max(1rem,16px)]'>
				<div className='flex items-center justify-between'>
					<h3 className='text-charcoal text-16'>Gross Income</h3>
					<p className='text-16 text-right'>₦{gross_income.toLocaleString()}</p>
				</div>

				<div
					className='flex items-center justify-between
        border-b border-b-border border-solid pb-[max(1rem,16px)]
        '>
					<h3 className='text-charcoal text-16'>Deductions</h3>
					<p className='text-16 text-right text-green'>
						-₦{deductions.toLocaleString()}
					</p>
				</div>

				<div className='flex items-center justify-between'>
					<h3 className='text-charcoal text-16'>Taxable Income</h3>
					<p className='text-16 text-right'>
						₦
						{deductions > gross_income
							? 0
							: (gross_income - deductions).toLocaleString()}
					</p>
				</div>

				<div
					className='flex items-center justify-between
         border-b border-b-border border-solid pb-[max(1rem,16px)]
        '>
					<h3 className='text-charcoal text-16'>Tax Payable</h3>
					<p className='text-16 text-right text-red'>-₦{taxPaid.toLocaleString()}</p>
				</div>

				<div className='flex items-center justify-between'>
					<h3 className='text-charcoal text-16'>Net Income</h3>
					<p className='text-24 text-right font-bold text-royal-blue'>
						₦{(gross_income - taxPaid).toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
}
