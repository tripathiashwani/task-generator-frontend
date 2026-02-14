import { useEffect, useState } from "react";
import { getLastSpecs } from "../api/api";
import type { Spec } from "../types";

export default function History() {
  const [specs, setSpecs] = useState<Spec[]>([]);

  useEffect(() => {
    async function fetchSpecs() {
      const res = await getLastSpecs();
      setSpecs(res.data);
    }
    fetchSpecs();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Last 5 Specs</h2>
      {specs.map((spec) => (
        <div key={spec.id} style={{ marginBottom: 10 }}>
          <strong>{spec.title}</strong>
          <p>{spec.goal}</p>
        </div>
      ))}
    </div>
  );
}
