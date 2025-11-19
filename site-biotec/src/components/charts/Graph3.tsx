import { ChartContainer } from "./ChartContainer";
import { chartData } from "../../data/chart-data";
import { ArrowRight } from "lucide-react";

export function Graph3() {
  const data = chartData["graph-3"];

  return (
    <ChartContainer title={data.title} description={data.description}>
      <div className="h-full w-full overflow-y-auto pr-2 custom-scrollbar">
        <div className="flex flex-col gap-6">
          {data.data.map((stage: any, index: number) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-primary/20 text-primary font-bold px-3 py-1 rounded-full text-sm border border-primary/50">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{stage.stage}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 border-l-2 border-border ml-4">
                {stage.items.map((item: any, idx: number) => (
                  <div key={idx} className="bg-card/30 p-3 rounded-lg border border-border/50 hover:bg-card/50 transition-colors">
                    <div className="font-medium text-sm text-foreground/90">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.detail}</div>
                  </div>
                ))}
              </div>

              {index < data.data.length - 1 && (
                <div className="absolute left-4 -bottom-4 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ChartContainer>
  );
}
