import { useState, useEffect } from "react";

export const useFetch = (apiFunction, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    apiFunction(params)
      .then((response) => setData(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [apiFunction, params]);

  return { data, loading, error };
};
