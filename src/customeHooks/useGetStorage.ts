
const useGetStorage = (key: string) => {
  let locale: string;
  if(typeof window !== 'undefined'){
      locale = JSON.parse(window.localStorage.getItem(key)!)
  }
  // @ts-ignore
  return locale?.auth!
}

export default useGetStorage;