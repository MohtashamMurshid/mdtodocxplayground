import { Textarea } from "@/components/ui/textarea";
import { MarkdownPreview } from "@/components/MarkdownPreview";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function Editor({ value, onChange }: EditorProps) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex-1 p-4 overflow-auto">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full min-h-[calc(100vh-12rem)] font-mono text-sm resize-none"
          spellCheck={false}
        />
      </div>
      <div className="flex-1 border-l p-4 overflow-auto">
        <MarkdownPreview content={value} />
      </div>
    </div>
  );
}
