import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import {
  ArrowUpCircle,
  ArrowDownCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface Trade {
  id: string;
  pair: string;
  position: "long" | "short";
  entryPrice: number;
  currentPrice: number;
  pnl: number;
  pnlPercentage: number;
}

interface ActiveTradesProps {
  trades?: Trade[];
}

const defaultTrades: Trade[] = [
  {
    id: "1",
    pair: "BTC/USDT",
    position: "long",
    entryPrice: 50000,
    currentPrice: 52000,
    pnl: 2000,
    pnlPercentage: 4,
  },
  {
    id: "2",
    pair: "ETH/USDT",
    position: "short",
    entryPrice: 3000,
    currentPrice: 2900,
    pnl: 100,
    pnlPercentage: 3.33,
  },
  {
    id: "3",
    pair: "SOL/USDT",
    position: "long",
    entryPrice: 100,
    currentPrice: 98,
    pnl: -200,
    pnlPercentage: -2,
  },
];

const ActiveTrades = ({ trades = defaultTrades }: ActiveTradesProps) => {
  return (
    <Card className="w-full h-[400px] bg-background">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Active Trades</span>
          <Badge variant="outline">{trades.length} Positions</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pair</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Entry Price</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>PnL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade) => (
                <TableRow key={trade.id}>
                  <TableCell className="font-medium">{trade.pair}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {trade.position === "long" ? (
                        <ArrowUpCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDownCircle className="w-4 h-4 text-red-500" />
                      )}
                      {trade.position.toUpperCase()}
                    </div>
                  </TableCell>
                  <TableCell>${trade.entryPrice.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      ${trade.currentPrice.toLocaleString()}
                      {trade.currentPrice > trade.entryPrice ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        trade.pnl >= 0 ? "text-green-500" : "text-red-500"
                      }
                    >
                      ${trade.pnl.toLocaleString()} ({trade.pnlPercentage}%)
                    </span>
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

export default ActiveTrades;
