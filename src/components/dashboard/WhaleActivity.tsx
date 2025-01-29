import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Waves } from "lucide-react";

interface Transaction {
  id: string;
  timestamp: string;
  amount: string;
  type: "buy" | "sell";
  price: string;
  impact: number;
}

interface WhaleActivityProps {
  transactions?: Transaction[];
}

const defaultTransactions: Transaction[] = [
  {
    id: "1",
    timestamp: "2024-03-21 14:30:00",
    amount: "150 BTC",
    type: "buy",
    price: "$65,000",
    impact: 2.5,
  },
  {
    id: "2",
    timestamp: "2024-03-21 14:15:00",
    amount: "200 BTC",
    type: "sell",
    price: "$64,800",
    impact: -3.1,
  },
  {
    id: "3",
    timestamp: "2024-03-21 14:00:00",
    amount: "175 BTC",
    type: "buy",
    price: "$64,500",
    impact: 2.8,
  },
];

const WhaleActivity = ({
  transactions = defaultTransactions,
}: WhaleActivityProps) => {
  return (
    <Card className="w-full bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Waves className="w-6 h-6" />
          Whale Activity Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Market Impact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.timestamp}</TableCell>
                <TableCell className="font-medium">
                  {transaction.amount}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.type === "buy" ? "default" : "destructive"
                    }
                  >
                    {transaction.type.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>
                  <span
                    className={`${
                      transaction.impact > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.impact > 0 ? "+" : ""}
                    {transaction.impact}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default WhaleActivity;
