import { useState, useCallback } from 'react';

export function useLRUCache(capacity: number) {
  const [cache, setCache] = useState(new Map());

  const get = useCallback(
    (key: string) => {
      if (!cache.has(key)) return -1;

      const newCache = new Map(cache);
      const value = newCache.get(key);
      newCache.delete(key);
      newCache.set(key, value);
      setCache(newCache);

      return value;
    },
    [cache]
  );

  const put = useCallback(
    (key: string, value: Array<string>) => {
      const newCache = new Map(cache);

      if (newCache.has(key)) {
        newCache.delete(key);
      }

      newCache.set(key, value);

      if (newCache.size > capacity) {
        const lruKey = newCache.keys().next().value;
        newCache.delete(lruKey);
      }

      setCache(newCache);
    },
    [cache, capacity]
  );

  return { get, put, cache: cache };
}
