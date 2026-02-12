import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	TikTokIcon,
	TwitterIcon,
	Whatsapp,
} from '@/components/icons';
import { FOOTERLINKS } from '@/lib/mock';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	const SOCIALS = [
		{
			href: '',
			icon: <FacebookIcon />,
		},
		{
			href: '',
			icon: <TwitterIcon />,
		},
		{
			href: '',
			icon: <InstagramIcon />,
		},
		{
			href: '',
			icon: <LinkedinIcon />,
		},
		{
			href: '',
			icon: <TikTokIcon />,
		},
	];

	return (
		<footer
			className='bg-navy py-[max(3rem,48px)] px-gutter 
			mt-[max(6.875rem,80px)]'>
			<div className='app-container'>
				<div>
					<Link href='/'>
						<Image src='/logo.png' width={93} height={25} alt='TaxOga logo' />
					</Link>
					<p className='text-14 mt-[max(0.938rem,15px)] text-[#D1D5DC]'>
						Where everyday individuals and businesses get premium tax support.
					</p>
				</div>

				<div className='mt-[max(3.75rem,40px)]'>
					<ul
						className='flex max-sm:flex-col items-start justify-between 
					flex-wrap gap-[max(2.5rem,32px)]'>
						{FOOTERLINKS.map((footer_link, i) => (
							<li key={i}>
								<h3 className='text-white text-16 font-bold'>{footer_link.title}</h3>
								<ul className='mt-[max(1rem,16px)] space-y-[max(0.438rem,7px)]'>
									{footer_link.links.map((link) => (
										<li key={link}>
											<Link href='#' className='text-14 text-[#D1D5DC]'>
												{link}
											</Link>
										</li>
									))}
									{footer_link.title === 'Tax Guides' && (
										<Link href='#' className='text-14 text-[#D1D5DC] underline'>
											View all Guides
										</Link>
									)}
								</ul>
							</li>
						))}
					</ul>
				</div>

				<div className='mt-[max(4.25rem,40px)]'>
					<h3 className='text-white text-16 font-bold'>Connect With Us</h3>
					<p
						className='text-white text-14 flex items-center 
					gap-[max(0.5rem,8px)] mt-[max(1rem,16px)]'>
						<Whatsapp />{' '}
						<Link href='tel:+234 800 123 4567' target='_blank' rel='noopener'>
							<span>WhatsApp: +234 800 123 4567</span>
						</Link>
					</p>
				</div>

				<div className='mt-[max(1rem,16px)]'>
					<ul className='flex items-center gap-[max(0.75rem,12px)]'>
						{SOCIALS.map((social, i) => (
							<li key={i}>
								<Link href={social.href}>{social.icon}</Link>
							</li>
						))}
					</ul>
				</div>

				<div
					className='flex items-center justify-center mt-[max(4.625rem,40px)]
				border-t border-t-[#FFFFFF1A] border-solid pt-[max(2rem,24px)]
				'>
					<p className='text-14 text-[#D1D5DC] leading-[1.7] text-center'>
						© 2025 TaxEase NG. All rights reserved. Built for compliance with Nigeria
						Tax Act 2025.
					</p>
				</div>
			</div>
		</footer>
	);
}
