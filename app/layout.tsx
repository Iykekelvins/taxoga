import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { Lenis } from 'lenis/react';

import Navbar from '@/shared/navbar';
import GetStarted from '@/shared/get-started';
import Footer from '@/shared/footer';

import './globals.css';
import { Toaster } from 'sonner';

const figtree = Figtree({
	variable: '--font-figtree',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		default:
			'TaxOga - Tax Filing and Compliance for Businesses and Individuals in Nigeria Under the New Tax Act',
		template: '%s - TaxOga',
	},
	description:
		"Easily file your taxes in Nigeria with Tax Oga. Whether you're a salary earner, freelancer, business owner, remote or diaspora worker, get accurate filing, expert support, and maximum savings. Start now.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Lenis
				root
				options={{
					wheelMultiplier: 0.9,
				}}>
				<body className={`${figtree.variable} antialiased`}>
					<Navbar />
					<main>
						{children}
						<GetStarted />
					</main>
					<Toaster position='top-left' richColors theme='dark' />
					<Footer />
				</body>
			</Lenis>
		</html>
	);
}
