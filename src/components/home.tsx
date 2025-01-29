import React from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import PortfolioOverview from "./dashboard/PortfolioOverview";
import ActiveTrades from "./dashboard/ActiveTrades";
import StrategyControl from "./dashboard/StrategyControl";
import TradeHistory from "./dashboard/TradeHistory";
import WhaleActivity from "./dashboard/WhaleActivity";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-4 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PortfolioOverview />
          <ActiveTrades />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <StrategyControl />
          <TradeHistory />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <WhaleActivity />
        </div>
      </main>
    </div>
  );
};

export default Home;
