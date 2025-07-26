export const useStore = (key: string) => {
  const getItem = (key: string) => {
    return localStorage.getItem(key)
  }
  const setItem = (item: object | string | number) => {
    const obj = JSON.stringify(item)
    localStorage.setItem(key, obj)
  }

  const removeItem = () => {
    localStorage.removeItem(key)
  }

  const clearItem = () => {
    localStorage.clear()
  }

  return {
    getItem,
    setItem,
    removeItem,
    clearItem,
  }
}
