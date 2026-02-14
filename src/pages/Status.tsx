import { useEffect, useState } from "react";
import { getHealth } from "../api/api";
import type { HealthResponse } from "../types";

export default function Status() {
  const [status, setStatus] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHealth() {
      try {
        const res = await getHealth();
        setStatus(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchHealth();
  }, []);

  const StatusBadge = ({ ok }: { ok: boolean }) => (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        ok ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {ok ? "Healthy" : "Down"}
    </span>
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12">

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">
            System Status
          </h2>

          {loading && (
            <p className="text-gray-400">Checking system health...</p>
          )}

          {!loading && status && (
            <div className="space-y-4">

              <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                <span className="font-medium">Backend</span>
                <StatusBadge ok={status.backend === "ok"} />
              </div>

              <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                <span className="font-medium">LLM Connection</span>
                <StatusBadge ok={status.llm_configured} />
              </div>

            </div>
          )}

          {!loading && !status && (
            <p className="text-red-500">
              Unable to fetch system status.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
