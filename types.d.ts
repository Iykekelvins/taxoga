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

type TaxCalculatorInfo = {
	band: string;
	rate: number;
	taxPaid: number;
	taxableAmount: number;
};

type TaxData = {
	taxPaid: number;
	monthly: number;
	rate: number;
};

type Industry = {
	createdBy: string;
	dateCreated: string;
	description: string;
	extraProperty: string;
	id: string;
	identifier: null;
	isRequired: boolean;
	name: string;
	optionType: null;
	optionTypeId: string;
};

type IndustryData = {
	value: {
		value: {
			data: Industry[];
		};
	};
};

type ConfigurationData = {
	value: {
		value: {
			name: string;
			description: string;
			fixedOrPercentage: string;
			identifier: string;
			value: string | undefined;
			organizationId: string;
			id: string;
			createdBy: string;
			dateCreated: string;
			dateLastModified: null;
			lastModifiedBy: null;
		};
	};
};

type CompanyIncomeState = {
	industry: string;
	totalSalesRevenue: string;
	profitMade: string;
	yearOfIncorporation: string;
	totalNetProfit: string;
};

type ExtraProperty = {
	RequiresIncomeTax: boolean;
	HasExemptionPeriod: boolean;
	ExemptionPeriodYears: number;
};

type TaxLiabilityProps = {
	annual_tax: number | undefined;
	monthly: number | undefined;
	rate: number | undefined;
};
