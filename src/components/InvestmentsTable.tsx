
import { DollarSign, Building2, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Investment {
  id: string;
  companyName: string;
  amountInvested: number;
  currency: string;
  dateOfInvestment: string;
  countryOfCompany: string;
  operatingCountries: string[];
}

interface InvestmentsTableProps {
  investments: Investment[];
}

const InvestmentsTable = ({ investments }: InvestmentsTableProps) => {
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

  return (
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
  );
};

export default InvestmentsTable;
