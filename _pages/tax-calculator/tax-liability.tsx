type TaxLiabilityProps = {
	annual_tax: number | undefined;
	monthly: number | undefined;
	rate: number | undefined;
};

export default function TaxLiability({
	annual_tax = 0,
	monthly = 0,
	rate = 0,
}: TaxLiabilityProps) {
	return (
		<div
			className='bg-[linear-gradient(180deg,#001F3F_0%,#003366_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
      rounded-[max(1.5rem,24px)] p-[max(1.5rem,24px)] text-white space-y-[max(0.5rem,8px)]
      max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full sm:sticky sm:top-32 lg:top-24 
			max-sm:bg-linear-to-b from-[rgba(0,31,63,0.8)] to-[rgba(0,51,102,0.8)]
      '>
			<h3 className='flex items-center gap-[max(0.5rem,8px)]'>
				<span className='text-24 font-medium'>₦</span>{' '}
				<span className='text-16'>Annual Tax Liability</span>
			</h3>

			<h4 className='text-48 font-bold '>₦{annual_tax.toLocaleString()}</h4>

			<div
				className='border-t border-t-[#FFFFFF33] border-solid
      pt-[max(1.063rem,15px)] grid grid-cols-2
      '>
				<div className='space-y-[max(0.5rem,8px)]'>
					<h4 className='text-12'>Monthly</h4>
					<p className='text-20 font-semibold'>₦{monthly.toLocaleString()}</p>
				</div>
				<div className='space-y-[max(0.5rem,8px)]'>
					<h4 className='text-12'>Effective Rate</h4>
					<p className='text-20 font-semibold'>{rate.toFixed(2)}%</p>
				</div>
			</div>
		</div>
	);
}
