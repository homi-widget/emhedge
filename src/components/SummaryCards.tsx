import { DollarSign, Building2, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Investment } from "./map/types";

interface SummaryCardsProps {
  investments: Investment[];
}

const SummaryCards = ({ investments }: SummaryCardsProps) => {
  const totalInvestments = investments.length;
  const totalValue = investments.reduce((sum, inv) => sum + inv.amountInvested, 0);
  const uniqueCountries = new Set(investments.flatMap(inv => [inv.countryOfCompany, ...inv.operatingCountries]));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="bg-white border border-[#FFCB74]/30 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-[#111111] text-lg">
            <Building2 className="h-5 w-5 text-[#FFCB74]" />
            Total Investments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-light text-[#111111]">{totalInvestments}</div>
          <p className="text-sm text-[#2F2F2F] mt-1">Active portfolio companies</p>
        </CardContent>
      </Card>

      <Card className="bg-white border border-[#FFCB74]/30 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-[#111111] text-lg">
            <DollarSign className="h-5 w-5 text-[#FFCB74]" />
            Portfolio Value
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-light text-[#111111]">
            ${totalValue.toLocaleString()}
          </div>
          <p className="text-sm text-[#2F2F2F] mt-1">Total invested capital</p>
        </CardContent>
      </Card>

      <Card className="bg-white border border-[#FFCB74]/30 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-[#111111] text-lg">
            <Globe className="h-5 w-5 text-[#FFCB74]" />
            Geographic Reach
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-light text-[#111111]">{uniqueCountries.size}</div>
          <p className="text-sm text-[#2F2F2F] mt-1">Countries of operation</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
