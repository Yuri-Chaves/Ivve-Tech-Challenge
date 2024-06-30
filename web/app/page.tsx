import ChuckFact from "@/components/ChuckFact";

import {chuckIvveApiPT} from "../mocks/chuckIvveApi";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import RequestConfigs from "@/components/RequestConfigs";

export default function Home() {  
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <ResizablePanelGroup direction="horizontal" className="sm:max-w-4xl gap-1">
        <ResizablePanel defaultSize={70}>
          <ChuckFact {...chuckIvveApiPT} />
        </ResizablePanel>
        <ResizablePanel defaultSize={30}>
          <RequestConfigs />
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
}
