
export interface Investment {
  id: string;
  companyName: string;
  amountInvested: number;
  currency: string;
  dateOfInvestment: string;
  countryOfCompany: string;
  operatingCountries: string[];
}

export interface MapVisualizationProps {
  investments: Investment[];
}
