import { useFetch } from '@/hooks/useFetch';
import { useMemo, useState } from 'react';
import { InfoCircle } from '@/components/icons';

import IncomeSources from './income-sources';
import TaxLiability from '../tax-liability';
import TaxBreakdown from '../tax-breakdown';
import IncomeSummary from '../income-summary';

const initialIncomeState: CompanyIncomeState = {
	industry: '',
	totalSalesRevenue: '',
	profitMade: '',
	yearOfIncorporation: '',
	totalNetProfit: '',
};

export default function CompanyIncome() {
	const { data: configuration, isLoading } = useFetch<ConfigurationData>(
		'https://api.taxoga.com/public/system-configuration/COMPANY_INCOME_TAX_CONFIGURATION',
	);

	const configurationValues: {
		TaxRate: number;
		TaxableAmountThreshold: number;
	} = isLoading ? {} : JSON.parse(configuration?.value?.value?.value as string);

	const [incomeState, setIncomeState] = useState(initialIncomeState);
	const [extraProperty, setExtraProperty] = useState<ExtraProperty | null>(null);

	const isInExemptionPeriod = (
		hasExemptionPeriod: boolean,
		exemptionPeriodYears: number,
		yearOfIncorporation: number,
	): boolean => {
		if (!hasExemptionPeriod) return false;

		const currentYear = new Date().getFullYear();
		const yearsSinceIncorporation = currentYear - yearOfIncorporation;

		return yearsSinceIncorporation <= exemptionPeriodYears;
	};

	const taxPayable = useMemo(() => {
		const shouldCalculateTax =
			extraProperty?.RequiresIncomeTax &&
			incomeState.profitMade === 'yes' &&
			incomeState.totalSalesRevenue === 'more_than_threshold' &&
			!isInExemptionPeriod(
				extraProperty!.HasExemptionPeriod,
				extraProperty!.ExemptionPeriodYears,
				Number(incomeState.yearOfIncorporation),
			);

		if (!shouldCalculateTax) return 0;

		const netProfit = Number(String(incomeState.totalNetProfit).replace(/,/g, ''));
		return (configurationValues?.TaxRate / 100) * netProfit;
	}, [
		incomeState.profitMade,
		incomeState.totalSalesRevenue,
		incomeState.totalNetProfit,
		incomeState.yearOfIncorporation,
		configurationValues?.TaxRate,
		extraProperty,
	]);

	const monthlyTaxPayment = useMemo(() => {
		return taxPayable / 12;
	}, [taxPayable]);

	const effectiveTaxRate = useMemo(() => {
		const netProfit = Number(String(incomeState.totalNetProfit).replace(/,/g, ''));

		if (netProfit === 0) return 0;

		return (taxPayable / netProfit) * 100;
	}, [taxPayable, incomeState.totalNetProfit]);

	const taxBracket = useMemo(() => {
		if (!extraProperty) return [];

		const inExemptionPeriod = isInExemptionPeriod(
			extraProperty.HasExemptionPeriod,
			extraProperty.ExemptionPeriodYears,
			Number(incomeState.yearOfIncorporation),
		);

		const shouldShowTaxFree =
			!extraProperty.RequiresIncomeTax ||
			(extraProperty.HasExemptionPeriod && inExemptionPeriod);

		if (shouldShowTaxFree) {
			return [
				{
					name: 'Tax-Free',
					info: 'You are in a tax-free industry',
					payable_amount: 0,
					percentage: 0,
				},
			];
		}

		if (taxPayable > 0) {
			return [
				{
					name: `${configurationValues?.TaxRate}% Band`,
					info: `₦${incomeState?.totalNetProfit} taxed at ${configurationValues?.TaxRate}%`,
					payable_amount: taxPayable,
					percentage: 100,
				},
			];
		}

		return [
			{
				name: 'No Tax',
				info: 'Conditions for tax calculation not met',
				payable_amount: 0,
				percentage: 0,
			},
		];
	}, [
		taxPayable,
		configurationValues?.TaxRate,
		incomeState.totalNetProfit,
		incomeState.yearOfIncorporation,
		extraProperty,
	]);

	const handleReset = () => {
		setIncomeState(initialIncomeState);
		setExtraProperty(null);
	};

	return (
		<div className='mt-[max(2rem,24px)] grid sm:grid-cols-2 gap-[max(1.5rem,16px)]'>
			<div
				className='flex items-start gap-[max(0.75rem,12px)] 
											border border-royal-blue border-solid py-[max(0.813rem,13px)]
											rounded-[max(24px)] px-[max(1.063rem,14px)] sm:hidden
										'>
				<InfoCircle />
				<p className='text-14 text-[#717182] leading-[1.4] -mt-[max(4px,0.25rem)]'>
					The business calculator calculates the income of registered limited
					liability companies.
				</p>
			</div>
			<div className='space-y-[max(1.5rem,16px)]'>
				<IncomeSources
					incomeState={incomeState}
					setIncomeState={setIncomeState}
					setExtraProperty={setExtraProperty}
					configurationValues={configurationValues}
				/>
				<button
					className='flex items-center justify-center h-[max(2.813rem,45px)]
					border border-border border-solid rounded-[max(0.75rem,12px)]
					px-[max(1rem,16px)] text-14 text-near-black font-medium w-full
					hover:border-royal-blue
					'
					onClick={handleReset}>
					Reset All
				</button>
			</div>

			<div className='space-y-[max(1.5rem,16px)]'>
				<TaxLiability
					annual_tax={taxPayable}
					monthly={monthlyTaxPayment}
					rate={effectiveTaxRate}
				/>
				<TaxBreakdown brackets={taxBracket} isCompany />
				<IncomeSummary
					gross_income={Number(incomeState.totalNetProfit.replace(/,/g, ''))}
					deductions={0}
					taxPaid={taxPayable}
				/>
			</div>
		</div>
	);
}
