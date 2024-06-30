"use client";

import ChuckFact from "@/components/ChuckFact";

import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import RequestConfigs from "@/components/RequestConfigs";
import { useEffect } from "react";
import { useGetRandomFact } from "@/domain";
import { useFactsService } from "@/services";

export default function Home() {
  const { facts, searching } = useFactsService()
  const { mutate } = useGetRandomFact()

  useEffect(() => {
    mutate(undefined)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="hidden md:block min-w-[700px] max-w-[700px]">
        <ResizablePanelGroup direction="horizontal" className="sm:max-w-4xl gap-1">
          <ResizablePanel defaultSize={70} className="h-96">
              <ChuckFact facts={facts} inLoading={searching} />
          </ResizablePanel>
          <ResizablePanel defaultSize={30} className="h-96">
            <RequestConfigs />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="md:hidden block min-w-[100%]">
        <ResizablePanelGroup direction="vertical" className="w-full min-h-[650px] gap-1">
          <ResizablePanel defaultSize={50}>
            <ChuckFact facts={facts} inLoading={searching} />
          </ResizablePanel>
          <ResizablePanel defaultSize={50}>
            <RequestConfigs />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </section>
  );
}
