import { Metadata } from 'next';
import { Suspense } from 'react';

import TaxCalculator from '@/_pages/tax-calculator';

export const metadata: Metadata = {
	title: 'Tax Calculator',
};

const TaxCalculatorpage = () => {
	return (
		<Suspense>
			<TaxCalculator />;
		</Suspense>
	);
};

export default TaxCalculatorpage;
