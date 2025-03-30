import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  mode: "document" | "report";
  onModeChange: (mode: "document" | "report") => void;
}

export function Header({ mode, onModeChange }: HeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-bold">MD to DOCX Playground</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>Mode:</span>
          <div className="flex gap-2">
            <Button
              variant={mode === "document" ? "default" : "outline"}
              onClick={() => onModeChange("document")}
              size="sm"
            >
              Document
            </Button>
            <Button
              variant={mode === "report" ? "default" : "outline"}
              onClick={() => onModeChange("report")}
              size="sm"
            >
              Report
            </Button>
          </div>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
