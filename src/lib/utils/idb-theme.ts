const DB_NAME = 'app-theme'
const STORE = 'settings'
const KEY = 'theme'

let dbPromise: Promise<IDBDatabase> | null = null

const openDB = () => {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((res, rej) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(STORE)
    req.onsuccess = () => res(req.result)
    req.onerror = () => rej(req.error)
  })
  return dbPromise
}

export const getSavedTheme = async (): Promise<'light' | 'dark' | null> => {
  try {
    const db = await openDB()
    return new Promise(resolve => {
      const req = db.transaction(STORE).objectStore(STORE).get(KEY)
      req.onsuccess = () => resolve(req.result || null)
    })
  } catch {
    return null
  }
}

export const saveTheme = async (theme: 'light' | 'dark') => {
  try {
    const db = await openDB()
    await new Promise<void>(resolve => {
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).put(theme, KEY)
      tx.oncomplete = () => resolve()
    })
  } catch {}
}
