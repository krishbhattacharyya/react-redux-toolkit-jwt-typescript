import { useState } from "react"

export default function useLocalStorage() {
  function setStorage(key: string, initialvalue: any) {
    localStorage.setItem(key, JSON.stringify(initialvalue))
  }
  function getStorage(key: string) {
    const savedValue = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || "")
      : ""
    return savedValue;
  }
  return { setStorage, getStorage } as const
}
