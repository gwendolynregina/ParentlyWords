import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'parentlywords-saved';

// Load from localStorage once at module level
function getInitialSavedIds(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return new Set(parsed);
    }
  } catch (e) {
    console.error('Failed to load saved phrases:', e);
  }
  return new Set();
}

export function useSavedPhrases() {
  const [savedIds, setSavedIds] = useState<Set<string>>(() => getInitialSavedIds());

  // Save to localStorage whenever savedIds changes (but not on initial mount)
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...savedIds]));
    } catch (e) {
      console.error('Failed to save phrases:', e);
    }
  }, [savedIds, isInitialized]);

  const toggleSaved = useCallback((id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isSaved = useCallback((id: string) => {
    return savedIds.has(id);
  }, [savedIds]);

  return { savedIds, toggleSaved, isSaved };
}
