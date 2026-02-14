import { useState } from "react";
import { generateSpec } from "../api/api";
import type { GenerateRequest } from "../types";
import TaskEditor from "../components/TaskEditor";

export default function Home() {
  const [form, setForm] = useState<GenerateRequest>({
    title: "",
    goal: "",
    users: "",
    constraints: "",
    template_type: "web"
  });

  const [tasks, setTasks] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!form.goal?.trim()) {
      alert("Goal is required");
      return;
    }

    try {
      setLoading(true);
      const res = await generateSpec(form);
      setTasks(res.data.tasks);
    } catch (err) {
      console.error(err);
      alert("Error generating spec");
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="min-h-screen">
    <div className="max-w-3xl mx-auto px-6 py-12">

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">
          Create Specification
        </h2>

        <div className="space-y-4">

          <input
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Goal"
            value={form.goal}
            onChange={(e) =>
              setForm({ ...form, goal: e.target.value })
            }
          />

          <textarea
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Users"
            value={form.users}
            onChange={(e) =>
              setForm({ ...form, users: e.target.value })
            }
          />

          <textarea
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Constraints"
            value={form.constraints}
            onChange={(e) =>
              setForm({ ...form, constraints: e.target.value })
            }
          />

          <select
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
            value={form.template_type}
            onChange={(e) =>
              setForm({ ...form, template_type: e.target.value })
            }
          >
            <option value="web">Web App</option>
            <option value="mobile">Mobile App</option>
            <option value="internal">Internal Tool</option>
          </select>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-medium disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Spec"}
          </button>
        </div>
      </div>

      {tasks && (
        <div className="mt-8">
          <TaskEditor tasks={tasks} setTasks={setTasks} />
        </div>
      )}

    </div>
  </div>
);

}
