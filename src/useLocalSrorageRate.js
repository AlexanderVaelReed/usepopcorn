
import { useState, useEffect } from "react";


export function useLocalStorageRate(initialValue) {
  const [watched, setWatched] = useState(function () {
    const storedData = localStorage.getItem("watched");
    return storedData ? JSON.parse(storedData) : [];
  });
}