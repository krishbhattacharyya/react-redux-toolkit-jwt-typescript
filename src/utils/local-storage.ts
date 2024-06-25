export function deleteLocalStorage(keys: string[]) {
  for (const element of keys) {
    localStorage.removeItem(element)
  }
}

export function clearLocalStorage() {
  localStorage.clear()
}
