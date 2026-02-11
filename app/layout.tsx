import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

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
			<body className={`${figtree.variable} antialiased`}>
				<main>{children}</main>
			</body>
		</html>
	);
}
