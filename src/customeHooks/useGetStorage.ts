const useGetStorage = (key: string) => {
  let locale: any;
  if (typeof window !== "undefined") {
    locale = JSON.parse(window.localStorage.getItem(key)!);
  }
  return locale;
};

export default useGetStorage;
