// src/hooks/useExplainerTopics.js
import { useState, useEffect } from "react";
import { fetchExplainerTopics } from "../utils/api";

export const useExplainerTopics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const data = await fetchExplainerTopics();
        setTopics(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadTopics();
  }, []);

  return { topics, loading, error };
};
