import { useEffect } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { Dropdown } from '@/components/dropdown';

export default function IncomeSources({
	incomeState,
	setIncomeState,
	setExtraProperty,
	configurationValues,
}: {
	incomeState: CompanyIncomeState;
	setIncomeState: (income: CompanyIncomeState) => void;
	setExtraProperty: (e: ExtraProperty) => void;
	configurationValues: {
		TaxRate: number;
		TaxableAmountThreshold: number;
	};
}) {
	const { data: industries, isLoading } = useFetch<IndustryData>(
		'https://api.taxoga.com/public/option-type/TAX_INDUSTRIES/options?pageNumber=1&pageSize=500',
	);

	const handleDropdownChange = (payload: Record<string, string>) => {
		setIncomeState(payload as CompanyIncomeState);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;
		const rawValue = value.replace(/,/g, '');

		if (!/^\d*$/.test(rawValue)) return;

		const formattedValue = rawValue ? Number(rawValue).toLocaleString() : '';

		setIncomeState({
			...incomeState,
			totalNetProfit: formattedValue,
		});
	};

	useEffect(() => {
		if (incomeState.industry && industries?.value?.value?.data) {
			const industryData = industries.value.value.data.find(
				(industry) => industry?.name === incomeState.industry,
			);

			if (industryData?.extraProperty) {
				setExtraProperty(JSON.parse(industryData.extraProperty));
			}
		}
	}, [incomeState.industry, industries?.value?.value?.data, setExtraProperty]);
	return (
		<div
			className='border border-border border-solid bg-white
				rounded-[max(1.5rem,24px)] p-[max(1.5rem,24px)]
				'>
			<h2 className='text-near-black text-24 font-bold'>Income Sources</h2>
			<p className='text-charcoal text-14 mt-[max(0.5rem,8px)] leading-[1.7]'>
				Enter your annual income from all your income sources.
			</p>

			<div className='mt-[max(1.5rem,24px)] space-y-[max(1rem,16px)]'>
				<Dropdown
					label='Industry'
					value={incomeState.industry}
					identifier='industry'
					payload={incomeState}
					setPayload={handleDropdownChange}
					disabled={isLoading}
					options={
						industries?.value?.value?.data?.map((industry) => {
							return {
								label: industry.name,
								value: industry.name,
							};
						}) || []
					}
				/>

				<Dropdown
					label='Total Sales/Revenue'
					value={incomeState.totalSalesRevenue}
					identifier='totalSalesRevenue'
					payload={incomeState}
					setPayload={handleDropdownChange}
					disabled={!configurationValues}
					options={[
						{
							label: `More than ₦${configurationValues?.TaxableAmountThreshold?.toLocaleString()}`,
							value: 'more_than_threshold',
						},
						{
							label: `Less than ₦${configurationValues?.TaxableAmountThreshold?.toLocaleString()}`,
							value: 'less_than_threshold',
						},
					]}
				/>

				<p className='text-[max(0.688rem,11px)] text-charcoal'>
					Did your business make a profit for the last financial year?
				</p>

				{incomeState.totalSalesRevenue === 'more_than_threshold' && (
					<Dropdown
						label='Did You Make a Profit?'
						value={incomeState.profitMade}
						identifier='profitMade'
						payload={incomeState}
						setPayload={handleDropdownChange}
						options={[
							{
								label: 'Yes',
								value: 'yes',
							},
							{
								label: 'No',
								value: 'no',
							},
						]}
					/>
				)}

				{incomeState.profitMade === 'yes' && (
					<>
						<div className='space-y-[max(0.5rem,8px)] grid'>
							<label
								htmlFor='year-of-incorporation'
								className='text-14 text-near-black font-medium'>
								Year Of Incorporation
							</label>

							<input
								type='text'
								id='year-of-incorporation'
								min={0}
								maxLength={4}
								value={incomeState.yearOfIncorporation}
								onChange={(e) =>
									setIncomeState({
										...incomeState,
										yearOfIncorporation: e.target.value,
									})
								}
								placeholder='2016'
								className='h-[max(2.813rem,45px)] border border-[#E9E9E9] border-solid rounded-[max(0.5rem,8px)]
              px-[max(0.75rem,12px)] transition-all duration-300 ease-in-out focus-within:border-near-black
              outline-0 text-near-black text-14 placeholder:text-[#717182]
              '
							/>
						</div>

						<div className='space-y-[max(0.5rem,8px)] grid'>
							<label
								htmlFor='total-net-profit'
								className='text-14 text-near-black font-medium'>
								Total Net Profit (₦)
							</label>

							<input
								type='text'
								id='total-net-profit'
								min={0}
								value={incomeState.totalNetProfit}
								onChange={handleInputChange}
								placeholder='0'
								className='h-[max(2.813rem,45px)] border border-[#E9E9E9] border-solid rounded-[max(0.5rem,8px)]
              px-[max(0.75rem,12px)] transition-all duration-300 ease-in-out focus-within:border-near-black
              outline-0 text-near-black text-14 placeholder:text-[#717182]
              '
							/>
						</div>
					</>
				)}

				<div
					className='mt-[max(1rem,16px)] pt-[max(1rem,16px)] border-t border-t-border
      border-solid flex items-center justify-between
      '>
					<p className='text-charcoal text-16'>Total Income</p>
					<h3 className='text-20 font-bold text-royal-blue'>
						₦{incomeState.totalNetProfit.toLocaleString() || 0}
					</h3>
				</div>
			</div>
		</div>
	);
}
