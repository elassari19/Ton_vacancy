<<<<<<< HEAD
const useGetStorage = (key: string) => {
  let locale: any;
  if (typeof window !== "undefined") {
    locale = JSON.parse(window.localStorage.getItem(key)!);
  }
  return locale;
};

export default useGetStorage;
=======

const useGetStorage = (key: string) => {
  let locale: string;
  if(typeof window !== 'undefined'){
      locale = JSON.parse(window.localStorage.getItem(key)!)
  }
  // @ts-ignore
  return locale?.auth!
}

export default useGetStorage;
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
