
import { useState, useEffect } from "react";

import VerbTableImperfective from "./components/VerbTableImperfectve";

export default function App() {

  const [verb, setVerb] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // load "byc" on first render
  useEffect(() => {
    async function fetchVerb() {
      try {
        const res = await fetch("/.netlify/functions/getVerb?name=byc");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setVerb(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVerb();
  }, []);

  if (loading) return <p>Loading verb...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!verb) return <p>No data</p>;

  return (
    <div>
      <VerbTableImperfective verb = {verb} />
    </div>
  );

}
