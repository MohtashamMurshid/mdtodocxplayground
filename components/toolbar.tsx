import { Button } from "@/components/ui/button";

interface ToolbarProps {
  activeExample: "basic" | "report" | "documentation";
  onExampleChange: (example: "basic" | "report" | "documentation") => void;
  onConvert: () => void;
}

export function Toolbar({
  activeExample,
  onExampleChange,
  onConvert,
}: ToolbarProps) {
  return (
    <div className="flex gap-2 p-4 border-b">
      <Button
        variant={activeExample === "basic" ? "outline" : "ghost"}
        onClick={() => onExampleChange("basic")}
        size="sm"
      >
        Basic Example
      </Button>
      <Button
        variant={activeExample === "report" ? "outline" : "ghost"}
        onClick={() => onExampleChange("report")}
        size="sm"
      >
        Report Example
      </Button>
      <Button
        variant={activeExample === "documentation" ? "outline" : "ghost"}
        onClick={() => onExampleChange("documentation")}
        size="sm"
      >
        Documentation Example
      </Button>
      <div className="flex-1" />
      <Button
        className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
        onClick={onConvert}
      >
        Convert to DOCX
      </Button>
    </div>
  );
}
