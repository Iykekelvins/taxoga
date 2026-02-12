import TaxCalculator from '@/_pages/tax-calculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tax Calculator',
};

const TaxCalculatorpage = () => {
	return <TaxCalculator />;
};

export default TaxCalculatorpage;
