"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/EmptyOrg";
import { useOrganization } from "@clerk/nextjs";
import BoardList from "./_components/BoardList";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorite?: boolean;
  };
}

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  return (
    <>
      <div className=" flex-1 h-[calc(100vh-95px)] p-6">
        {!organization ? (
          <EmptyOrg />
        ) : (
          <>
            <BoardList orgId={organization.id} query={searchParams} />
          </>
        )}
      </div>
    </>
  );
}
