import ChuckFact from "@/components/ChuckFact";

import {chuckIvveApiMock} from "../mocks/chuckIvveApi";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import RequestConfigs from "@/components/RequestConfigs";

export default function Home() {  
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="hidden md:block">
        <ResizablePanelGroup direction="horizontal" className="sm:max-w-4xl gap-1">
          <ResizablePanel defaultSize={70}>
            <ChuckFact {...chuckIvveApiMock} />
          </ResizablePanel>
          <ResizablePanel defaultSize={30}>
            <RequestConfigs />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="md:hidden block">
        <ResizablePanelGroup direction="vertical" className="w-full min-h-[650px] gap-1">
          <ResizablePanel defaultSize={50}>
            <ChuckFact {...chuckIvveApiMock} />
          </ResizablePanel>
          <ResizablePanel defaultSize={50}>
            <RequestConfigs />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </section>
  );
}
