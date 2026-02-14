export function getBandFill(taxableAmount: number, rate: number, taxPaid: number) {
	if (!taxableAmount) return 0;
	if (!rate) return taxPaid > 0 ? 100 : 0;

	const used = taxPaid / (rate / 100);
	return Math.min(100, (used / taxableAmount) * 100);
}
