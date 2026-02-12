'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import Header from './header';
import PersonalIncome from './personal-income';
import CompanyIncome from './company-income';

export default function MainContent() {
	const pathname = usePathname();
	const params = useSearchParams();

	const taxType = params.get('tax-type');
	const fullPath = taxType ? `${pathname}?tax-type=${taxType}` : pathname;

	return (
		<>
			<style jsx global>{`
				body {
					background-color: #fafafa;
				}
			`}</style>
			<div className='px-gutter pt-[max(3.125rem,40px)]'>
				<Header fullPath={fullPath} />
				{!fullPath.includes('tax-type') ? <PersonalIncome /> : <CompanyIncome />}
			</div>
		</>
	);
}
