type IncomeState = {
	salaryIncome: number | string;
	businessIncome: number | string;
	rentalIncome: number | string;
	investmentIncome: number | string;
	otherIncome: number | string;
};

type DeductionState = {
	rent: string | number;
	pensionContribution: string | number;
	nhfContribution: string | number;
	lifeInsurance: string | number;
	nhisPremium: string | number;
	gratitude: string | number;
};
