"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { PortfolioValueCard } from "@/components/dashboard/PortfolioValueCard";
import { CarbonOffsetCard } from "@/components/dashboard/CarbonOffsetCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { NFTCollection } from "@/components/dashboard/NFTCollection";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DashboardHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PortfolioValueCard />
          <CarbonOffsetCard />
        </div>

        <QuickActions />
        <RecentActivity />
        <NFTCollection />
      </div>
    </DashboardLayout>
  );
}