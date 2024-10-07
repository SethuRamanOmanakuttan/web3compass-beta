// src/hooks/useStarterPacks.js
import { useState, useEffect } from "react";
import { fetchStarterPacks } from "../utils/api";

export const useStarterPacks = () => {
  const [starterPacks, setStarterPacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStarterPacks = async () => {
      try {
        const data = await fetchStarterPacks();
        setStarterPacks(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadStarterPacks();
  }, []);

  return { starterPacks, loading, error };
};
