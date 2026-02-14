import { useState } from 'react';
import { CalculatorIcon } from '@/components/icons';
import { toast } from 'sonner';

import IncomeSources from './income-sources';
import Deductions from './deductions';
import TaxLiability from '../tax-liability';
import TaxBreakdown from '../tax-breakdown';
import IncomeSummary from '../income-summary';
import Button from '@/components/button';

const initialIncomeState: IncomeState = {
	salaryIncome: '',
	businessIncome: '',
	rentalIncome: '',
	investmentIncome: '',
	otherIncome: '',
};

const initialDeductionState: DeductionState = {
	rent: '',
	pensionContribution: '',
	nhfContribution: '',
	lifeInsurance: '',
	nhisPremium: '',
	gratitude: '',
};

export default function PersonalIncome() {
	const [incomeState, setIncomeState] = useState<IncomeState>(initialIncomeState);

	const [deductionState, setDeductionState] =
		useState<DeductionState>(initialDeductionState);

	const totalIncome = Object.values(incomeState).reduce<number>(
		(sum, value) =>
			sum +
			(typeof value === 'number' ? value : Number(value.replace(/,/g, '')) || 0),
		0,
	);

	const RENT_CAP = 500_000;

	const totalDeductions = Object.entries(deductionState).reduce<number>(
		(sum, [key, value]) => {
			const amount =
				typeof value === 'number' ? value : Number(value.replace(/,/g, '')) || 0;

			if (key === 'rent') {
				return sum + Math.min(amount, RENT_CAP);
			}

			return sum + amount;
		},
		0,
	);

	const [isLoading, setIsLoading] = useState(false);
	const [taxData, setTaxData] = useState<TaxData | null>(null);
	const [taxBrackets, setTaxBrackets] = useState([]);

	const handleTaxCalculation = async () => {
		setIsLoading(true);

		// convert incomes and deductions to numbers
		const income = Object.fromEntries(
			Object.entries(incomeState).map(([key, value]) => [
				key,
				parseFloat(value as string) || 0,
			]),
		) as Record<keyof typeof incomeState, number>;

		const deductions = Object.fromEntries(
			Object.entries(deductionState).map(([key, value]) => [
				key,
				parseFloat(value as string) || 0,
			]),
		) as Record<keyof typeof deductionState, number>;

		try {
			const response = await fetch(
				'https://api.taxoga.com/public/tax/paye/calculator',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						income,
						deductions,
					}),
				},
			);

			const data = await response.json();

			if (!response.ok) {
				toast.error(data?.value?.message);
				return;
			}

			const values = data?.value?.value;

			// handle tax data
			const taxPaid = values?.reduce((sum: number, tax: TaxCalculatorInfo) => {
				sum += tax.taxPaid;
				return sum;
			}, 0);

			const monthly = taxPaid / 12;
			const rate = (taxPaid / totalIncome) * 100;

			setTaxData({
				taxPaid,
				monthly,
				rate,
			});

			// handle tax brackets
			const brackets = values?.map((tax: TaxCalculatorInfo) => {
				const name = tax?.rate === 0 ? 'Tax-Free' : `${tax?.rate}% Band`;
				const maxTaxPaid = Math.max(
					...values.map((t: TaxCalculatorInfo) => t?.taxPaid || 0),
				);
				const percentage = maxTaxPaid > 0 ? (tax?.taxPaid / maxTaxPaid) * 100 : 0;

				return {
					name,
					info: `₦${tax?.taxableAmount?.toLocaleString()} taxed at ${name}`,
					payable_amount: tax?.taxPaid?.toLocaleString(),
					percentage,
				};
			});

			setTaxBrackets(brackets);
		} catch (error) {
			console.log('error', error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleReset = () => {
		setIncomeState(initialIncomeState);
		setDeductionState(initialDeductionState);
		setTaxBrackets([]);
		setTaxData(null);
	};

	return (
		<div className='mt-[max(2rem,24px)] grid sm:grid-cols-2 gap-[max(1.5rem,16px)]'>
			<div className='space-y-[max(1.5rem,16px)]'>
				<IncomeSources
					incomeState={incomeState}
					setIncomeState={setIncomeState}
					totalIncome={totalIncome}
				/>
				<Deductions
					deductionState={deductionState}
					setDeductionState={setDeductionState}
					totalDeductions={totalDeductions}
				/>
				<div className='flex items-center gap-[max(0.75rem,12px)]'>
					<Button
						variant='primary-blue'
						className='flex-[0.8] h-[max(2.813rem,45px)]'
						onClick={handleTaxCalculation}
						disabled={isLoading}>
						{isLoading ? <div className='spinner' /> : <CalculatorIcon />}
						<span>Calculate Tax</span>
					</Button>
					<button
						className='flex items-center justify-center h-[max(2.813rem,45px)]
					border border-border border-solid rounded-[max(0.75rem,12px)]
					px-[max(1rem,16px)] text-14 text-near-black font-medium flex-[0.2]
					hover:border-royal-blue
					'
						onClick={handleReset}>
						Reset All
					</button>
				</div>
			</div>
			<div className='space-y-[max(1.5rem,16px)]'>
				<TaxLiability
					annual_tax={taxData?.taxPaid}
					monthly={taxData?.monthly}
					rate={taxData?.rate}
				/>
				<TaxBreakdown brackets={taxBrackets} />
				<IncomeSummary
					gross_income={totalIncome}
					deductions={totalDeductions}
					taxPaid={taxData?.taxPaid}
				/>
			</div>
		</div>
	);
}
