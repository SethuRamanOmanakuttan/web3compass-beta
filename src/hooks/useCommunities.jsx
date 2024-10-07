// src/hooks/useCommunities.js

import { useState, useEffect } from "react";
import { fetchCommunities } from "../utils/api";

export const useCommunities = () => {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCommunities = async () => {
      try {
        const data = await fetchCommunities();
        setCommunities(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadCommunities();
  }, []);

  return { communities, loading, error };
};
