import { useState } from 'react';

import Deductions from './deductions';
import IncomeSources from './income-sources';

export default function PersonalIncome() {
	const [incomeState, setIncomeState] = useState<IncomeState>({
		salaryIncome: '',
		businessIncome: '',
		rentalIncome: '',
		investmentIncome: '',
		otherIncome: '',
	});

	const [deductionState, setDeductionState] = useState<DeductionState>({
		rent: '',
		pensionContribution: '',
		nhfContribution: '',
		lifeInsurance: '',
		nhisPremium: '',
		gratitude: '',
	});

	return (
		<div className='mt-[max(2rem,24px)] grid md:grid-cols-2 gap-[max(1.5rem,16px)]'>
			<div className='space-y-[max(1.5rem,16px)]'>
				<IncomeSources incomeState={incomeState} setIncomeState={setIncomeState} />

				<Deductions
					deductionState={deductionState}
					setDeductionState={setDeductionState}
				/>
			</div>
			<div></div>
		</div>
	);
}
