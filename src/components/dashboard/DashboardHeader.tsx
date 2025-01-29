import React from "react";
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  DollarSign,
} from "lucide-react";

interface DashboardHeaderProps {
  totalValue?: number;
  dailyChange?: number;
  activePositions?: number;
  totalProfit?: number;
}

const DashboardHeader = ({
  totalValue = 125000.5,
  dailyChange = 2.5,
  activePositions = 8,
  totalProfit = 15250.75,
}: DashboardHeaderProps) => {
  const isPositiveChange = dailyChange >= 0;

  return (
    <div className="w-full bg-background p-4 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Portfolio Value</p>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
          </Card>

          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">24h Change</p>
              {isPositiveChange ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
            </div>
            <p
              className={`text-2xl font-bold ${isPositiveChange ? "text-green-500" : "text-red-500"}`}
            >
              {isPositiveChange ? "+" : ""}
              {dailyChange}%
            </p>
          </Card>

          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Active Positions</p>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold">{activePositions}</p>
          </Card>

          <Card className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Total Profit</p>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-2xl font-bold text-green-500">
              ${totalProfit.toLocaleString()}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
