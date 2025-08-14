import { useState, useEffect, useCallback } from "react"
/**
 * A React hook that syncs state with localStorage
 * @param key localStorage key
 * @param initialValue initial state value
 */
export function useLocalStorage() {
    const [storage_state, set_storage_state] = useState<any>();

    const onStorageChange = useCallback(() => set_storage_state(localStorage.getItem('featured') as any), [])

    useEffect(() => {
        window.addEventListener("storage", (event: StorageEvent) => {
            console.log('storage', event);
            onStorageChange()
        })
        return () => window.removeEventListener("storage", onStorageChange)
    }, [])

    const handleSaveFeaturedId = useCallback((id: string) => localStorage.setItem('featured', id), [])

    return [storage_state, handleSaveFeaturedId]
}
