
import { useEffect, useState } from 'react';

export const useClientOnly = (initialValue: boolean = false) => {
  const [isClient, setIsClient] = useState(initialValue);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
