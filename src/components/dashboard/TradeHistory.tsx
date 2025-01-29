import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpDown, Download } from "lucide-react";

interface Trade {
  id: string;
  pair: string;
  type: "buy" | "sell";
  amount: number;
  price: number;
  date: string;
  profit: number;
}

interface TradeHistoryProps {
  trades?: Trade[];
  onSort?: (column: string) => void;
  onFilter?: (value: string) => void;
  onExport?: () => void;
}

const defaultTrades: Trade[] = [
  {
    id: "1",
    pair: "BTC/USDT",
    type: "buy",
    amount: 0.5,
    price: 45000,
    date: "2024-03-20",
    profit: 250,
  },
  {
    id: "2",
    pair: "ETH/USDT",
    type: "sell",
    amount: 2.5,
    price: 3000,
    date: "2024-03-19",
    profit: -120,
  },
  {
    id: "3",
    pair: "BNB/USDT",
    type: "buy",
    amount: 10,
    price: 420,
    date: "2024-03-18",
    profit: 180,
  },
];

const TradeHistory: React.FC<TradeHistoryProps> = ({
  trades = defaultTrades,
  onSort = () => {},
  onFilter = () => {},
  onExport = () => {},
}) => {
  return (
    <Card className="p-6 bg-background w-full h-[400px] overflow-hidden flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Trade History</h2>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Search trades..."
              className="w-[200px]"
              onChange={(e) => onFilter(e.target.value)}
            />
            <Select defaultValue="all">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Trades</SelectItem>
                <SelectItem value="buy">Buy Orders</SelectItem>
                <SelectItem value="sell">Sell Orders</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="icon" onClick={onExport}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-auto flex-grow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => onSort("date")}
              >
                Date <ArrowUpDown className="h-4 w-4 inline-block ml-1" />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => onSort("pair")}
              >
                Pair <ArrowUpDown className="h-4 w-4 inline-block ml-1" />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => onSort("type")}
              >
                Type <ArrowUpDown className="h-4 w-4 inline-block ml-1" />
              </TableHead>
              <TableHead
                className="text-right cursor-pointer"
                onClick={() => onSort("amount")}
              >
                Amount <ArrowUpDown className="h-4 w-4 inline-block ml-1" />
              </TableHead>
              <TableHead
                className="text-right cursor-pointer"
                onClick={() => onSort("price")}
              >
                Price <ArrowUpDown className="h-4 w-4 inline-block ml-1" />
              </TableHead>
              <TableHead
                className="text-right cursor-pointer"
                onClick={() => onSort("profit")}
              >
                Profit/Loss{" "}
                <ArrowUpDown className="h-4 w-4 inline-block ml-1" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((trade) => (
              <TableRow key={trade.id}>
                <TableCell>{trade.date}</TableCell>
                <TableCell>{trade.pair}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${trade.type === "buy" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {trade.type.toUpperCase()}
                  </span>
                </TableCell>
                <TableCell className="text-right">{trade.amount}</TableCell>
                <TableCell className="text-right">
                  ${trade.price.toLocaleString()}
                </TableCell>
                <TableCell
                  className={`text-right ${trade.profit >= 0 ? "text-green-600" : "text-red-600"}`}
                >
                  ${trade.profit.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default TradeHistory;
