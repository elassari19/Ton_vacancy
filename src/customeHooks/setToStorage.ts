const setToStorage = (key: string,value: any) => {
  if(typeof window !== 'undefined'){
    return window.localStorage.setItem(key,value)
  }
}

export default setToStorage;