import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<T>] {
  const item = window.localStorage.getItem(key);
  const [value, setValue] = useState<T>(
    item == null ? initialValue : JSON.parse(item)
  );

  useEffect(() => window.localStorage.setItem(key, JSON.stringify(value)), [
    key,
    value,
  ]);

  return [value, setValue];
}

export default useLocalStorage;
