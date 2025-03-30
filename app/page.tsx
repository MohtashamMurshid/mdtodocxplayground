"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Toolbar } from "@/components/toolbar";
import { Editor } from "@/components/editor";
import { examples } from "@/lib/examples";
import { convertMarkdownToDocx, downloadDocx } from "@mohtasham/md-to-docx";

export default function Home() {
  const [activeExample, setActiveExample] = useState<
    "basic" | "report" | "documentation"
  >("documentation");
  const [markdown, setMarkdown] = useState(examples[activeExample]);
  const [mode, setMode] = useState<"document" | "report">("document");

  // Update markdown content when activeExample changes
  useEffect(() => {
    setMarkdown(examples[activeExample]);
  }, [activeExample]);

  const handleConvertToDocx = async () => {
    try {
      const options = {
        documentType: mode,
        style: {
          titleSize: 32,
          headingSpacing: 240,
          paragraphSpacing: 240,
          lineSpacing: 1.15,
        },
      };

      const blob = await convertMarkdownToDocx(markdown, options);
      downloadDocx(blob, `${activeExample}-example.docx`);
    } catch (error) {
      console.error("Failed to convert markdown to DOCX:", error);
      // TODO: Add proper error handling UI
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header mode={mode} onModeChange={setMode} />
      <Toolbar
        activeExample={activeExample}
        onExampleChange={setActiveExample}
        onConvert={handleConvertToDocx}
      />
      <Editor value={markdown} onChange={setMarkdown} />
    </div>
  );
}
