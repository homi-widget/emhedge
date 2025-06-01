
import { useState } from "react";
import Header from "@/components/Header";
import MapVisualization from "@/components/MapVisualization";
import SummaryCards from "@/components/SummaryCards";
import InvestmentsTable from "@/components/InvestmentsTable";
import DashboardHeader from "@/components/DashboardHeader";

interface Investment {
  id: string;
  companyName: string;
  amountInvested: number;
  currency: string;
  dateOfInvestment: string;
  countryOfCompany: string;
  operatingCountries: string[];
}

const Dashboard = () => {
  const [investments] = useState<Investment[]>([
    {
      id: "1",
      companyName: "TechCorp Brazil",
      amountInvested: 2500000,
      currency: "USD",
      dateOfInvestment: "2024-03-15",
      countryOfCompany: "Brazil",
      operatingCountries: ["Brazil", "Argentina", "Chile", "Colombia"]
    },
    {
      id: "2",
      companyName: "FinTech Solutions",
      amountInvested: 1800000,
      currency: "EUR",
      dateOfInvestment: "2024-02-10",
      countryOfCompany: "India",
      operatingCountries: ["India", "Bangladesh", "Sri Lanka", "Nepal"]
    },
    {
      id: "3",
      companyName: "Digital Ventures",
      amountInvested: 3200000,
      currency: "USD",
      dateOfInvestment: "2024-01-20",
      countryOfCompany: "Nigeria",
      operatingCountries: ["Nigeria", "Ghana", "Kenya", "South Africa", "Uganda"]
    },
    {
      id: "4",
      companyName: "AgriTech Innovation",
      amountInvested: 1500000,
      currency: "GBP",
      dateOfInvestment: "2024-04-05",
      countryOfCompany: "Vietnam",
      operatingCountries: ["Vietnam", "Thailand", "Cambodia", "Laos", "Myanmar"]
    },
    {
      id: "5",
      companyName: "CleanEnergy Co",
      amountInvested: 4500000,
      currency: "USD",
      dateOfInvestment: "2024-05-12",
      countryOfCompany: "Mexico",
      operatingCountries: ["Mexico", "Guatemala", "Honduras", "El Salvador", "Costa Rica", "Panama"]
    }
  ]);

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <Header />
      
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <DashboardHeader />
        <SummaryCards investments={investments} />
        
        <div className="mb-8">
          <MapVisualization investments={investments} />
        </div>

        <InvestmentsTable investments={investments} />
      </div>
    </div>
  );
};

export default Dashboard;
