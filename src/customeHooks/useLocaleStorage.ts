/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

const storage = (key: string, data: any) => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem(key, data);
  }, [key, data]);

  if (typeof window !== "undefined") {
    setValue(JSON.parse(window.localStorage.getItem(key)!));
  }

  return [value, setValue];
};

export default storage;
