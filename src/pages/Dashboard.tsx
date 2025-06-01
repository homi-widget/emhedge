
import { useState } from "react";
import { DollarSign, Building2, MapPin, Calendar, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";

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

  const formatCurrency = (amount: number, currency: string) => {
    const formatters: { [key: string]: Intl.NumberFormat } = {
      USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
      EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
      GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
    };
    return formatters[currency]?.format(amount) || `${currency} ${amount.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const totalInvestments = investments.length;
  const totalValue = investments.reduce((sum, inv) => sum + inv.amountInvested, 0);
  const uniqueCountries = new Set(investments.flatMap(inv => [inv.countryOfCompany, ...inv.operatingCountries]));

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <Header />
      
      {/* Dashboard Content */}
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-light text-[#111111] mb-4">
            Portfolio Dashboard
          </h1>
          <p className="text-xl text-[#2F2F2F] max-w-2xl">
            Track your portfolio's currency sensitivity and geographical exposure across emerging markets.
          </p>
        </div>

        {/* Summary Cards */}
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

        {/* Investments Table */}
        <Card className="bg-white border border-[#FFCB74]/30 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#111111] text-xl font-light">
              Investment Portfolio
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-[#2F2F2F]/20">
                    <TableHead className="text-[#111111] font-medium">Company Name</TableHead>
                    <TableHead className="text-[#111111] font-medium">Amount Invested</TableHead>
                    <TableHead className="text-[#111111] font-medium">Investment Date</TableHead>
                    <TableHead className="text-[#111111] font-medium">Home Country</TableHead>
                    <TableHead className="text-[#111111] font-medium">Operating Countries</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investments.map((investment) => (
                    <TableRow key={investment.id} className="border-b border-[#2F2F2F]/10 hover:bg-[#F6F6F6]/50">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-[#FFCB74]" />
                          <span className="font-medium text-[#111111]">{investment.companyName}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-[#FFCB74]" />
                          <span className="font-medium text-[#111111]">
                            {formatCurrency(investment.amountInvested, investment.currency)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#FFCB74]" />
                          <span className="text-[#2F2F2F]">{formatDate(investment.dateOfInvestment)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#FFCB74]" />
                          <span className="text-[#2F2F2F]">{investment.countryOfCompany}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {investment.operatingCountries.map((country, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 text-xs bg-[#FFCB74]/20 text-[#111111] rounded-md border border-[#FFCB74]/30"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
