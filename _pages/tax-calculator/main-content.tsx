'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { InfoCircle } from '@/components/icons';

import Header from './header';
import PersonalIncome from './personal-income';
import CompanyIncome from './company-income';
import TaxBrackets from './tax-brackets';

import './TaxCalculator.module.css';

export default function MainContent() {
	const pathname = usePathname();
	const params = useSearchParams();

	const taxType = params.get('tax-type');
	const fullPath = taxType ? `${pathname}?tax-type=${taxType}` : pathname;

	return (
		<div className='px-gutter pt-[max(3.125rem,40px)]'>
			<Header fullPath={fullPath} />
			{!fullPath.includes('tax-type') ? <PersonalIncome /> : <CompanyIncome />}
			<TaxBrackets />
			<div
				className='flex items-start gap-[max(0.75rem,12px)] 
				  border border-royal-blue border-solid py-[max(0.813rem,13px)]
	   			rounded-[max(0.625rem,10px)] px-[max(1.063rem,14px)]
					my-[max(2rem,24px)]
				'>
				<InfoCircle />
				<p className='text-14 text-[#717182] leading-[1.4] -mt-[max(4px,0.25rem)]'>
					This calculator uses the latest tax brackets and rates from Nigeria&apos;s
					Tax Act 2025. The first ₦800,000 of annual income is tax-free. Results are
					estimates and should be verified with one of our tax professionals.
				</p>
			</div>
		</div>
	);
}
