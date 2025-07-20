export const useStore = ({ key }: { key: string }) => {
  const setItem = ({ obj: _obj }: { obj: object }) => {
    const obj = JSON.stringify(_obj)
    localStorage.setItem(key, obj)
  }

  const removeItem = () => {
    localStorage.removeItem(key)
  }

  const clearItem = () => {
    localStorage.clear()
  }

  return {
    setItem,
    removeItem,
    clearItem
  }
}
