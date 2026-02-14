import { useState } from "react";

interface Props {
  tasks: string;
  setTasks: React.Dispatch<React.SetStateAction<string>>;
}

export default function TaskEditor({ tasks, setTasks }: Props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tasks);
      setCopied(true);

      // Reset after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const downloadMarkdown = () => {
    const blob = new Blob([tasks], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "spec.md";
    a.click();
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Generated Spec</h3>

        <div className="space-x-3">
          <button
            onClick={copyToClipboard}
            className={`px-4 py-2 rounded-lg transition ${
              copied
                ? "bg-green-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          <button
            onClick={downloadMarkdown}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            Download
          </button>
        </div>
      </div>

      <textarea
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 h-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
