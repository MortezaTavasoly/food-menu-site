import { useEffect, useState } from "react";

export default function useFoods(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getFoods = async () => {
      const response = await fetch(url);
      if (response.status === 200) {
        const json = await response.json();
        setData(json);
        setIsLoading(false);
        setError(false);
      } else {
        setIsLoading(false);
        setError(true);
      }
    };
    getFoods();
  }, [url]);

  return { data, error, isLoading };
}
