import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PortfolioOverviewProps {
  portfolioData?: {
    value: number;
    timestamp: string;
  }[];
  assetDistribution?: {
    asset: string;
    value: number;
    percentage: number;
  }[];
}

const defaultPortfolioData = [
  { value: 10000, timestamp: "2024-01-01" },
  { value: 12000, timestamp: "2024-01-02" },
  { value: 11500, timestamp: "2024-01-03" },
  { value: 13000, timestamp: "2024-01-04" },
  { value: 14500, timestamp: "2024-01-05" },
];

const defaultAssetDistribution = [
  { asset: "BTC", value: 8500, percentage: 58.6 },
  { asset: "ETH", value: 4000, percentage: 27.6 },
  { asset: "USDT", value: 2000, percentage: 13.8 },
];

const PortfolioOverview = ({
  portfolioData = defaultPortfolioData,
  assetDistribution = defaultAssetDistribution,
}: PortfolioOverviewProps) => {
  return (
    <Card className="w-full h-[400px] bg-background">
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="value" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="value">Portfolio Value</TabsTrigger>
            <TabsTrigger value="distribution">Asset Distribution</TabsTrigger>
          </TabsList>

          <TabsContent value="value" className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="distribution" className="h-[280px]">
            <div className="space-y-4">
              {assetDistribution.map((asset) => (
                <div
                  key={asset.asset}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{asset.asset}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>${asset.value.toLocaleString()}</span>
                    <span className="text-muted-foreground">
                      {asset.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PortfolioOverview;
