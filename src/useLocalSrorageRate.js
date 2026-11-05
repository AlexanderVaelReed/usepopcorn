
import { useState, useEffect } from "react";


export function useLocalStorageRate(initialValue ,key) {
  const [value, setValue] = useState(function () {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialValue;
  });


  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value ,key],
  );

  return [value, setValue];
}