import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { situations } from '../data/phrases';
import type { Phrase, Situation } from '../data/phrases';

interface SearchResult {
  phrase: Phrase;
  situation: Situation;
}

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    
    const searchTerm = query.toLowerCase();
    const matches: SearchResult[] = [];
    
    for (const situation of situations) {
      for (const phrase of situation.phrases) {
        if (phrase.english.toLowerCase().includes(searchTerm)) {
          matches.push({ phrase, situation });
          if (matches.length >= 10) break;
        }
      }
      if (matches.length >= 10) break;
    }
    
    return matches;
  }, [query]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleResultClick = (situationId: string) => {
    setQuery('');
    setIsExpanded(false);
    setShowResults(false);
    navigate(`/situation/${situationId}`);
  };

  const handleClose = () => {
    setQuery('');
    setIsExpanded(false);
    setShowResults(false);
  };

  const handleIconClick = () => {
    setIsExpanded(true);
  };

  return (
    <div className="relative">
      {!isExpanded ? (
        <button
          onClick={handleIconClick}
          className="p-2 text-[#566363] hover:text-[#2A3333] hover:bg-[#E8ECEC] rounded-xl transition-colors"
          aria-label="Search"
        >
          <span className="text-xl">🔍</span>
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              placeholder="Search..."
              className="w-32 sm:w-40 pl-3 pr-8 py-2 bg-white border border-[#D1D9D9] rounded-xl text-sm text-[#2A3333] placeholder-[#A8B5B5] focus:outline-none focus:border-[#5B9A9A] focus:ring-1 focus:ring-[#5B9A9A] transition-colors"
            />
            <button
              onClick={handleClose}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#A8B5B5] hover:text-[#566363] transition-colors text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Results dropdown */}
      {isExpanded && showResults && query.length >= 2 && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-[#D1D9D9] rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-[#7A8A8A] text-center text-sm">
              No phrases found
            </div>
          ) : (
            <ul>
              {results.map((result, index) => (
                <li key={`${result.situation.id}-${result.phrase.id}-${index}`}>
                  <button
                    onClick={() => handleResultClick(result.situation.id)}
                    className="w-full text-left px-4 py-3 hover:bg-[#F2F5F5] transition-colors border-b border-[#E8ECEC] last:border-b-0"
                  >
                    <p className="text-[#2A3333] text-sm line-clamp-2">
                      {result.phrase.english}
                    </p>
                    <p className="text-[#7A8A8A] text-xs mt-1">
                      {result.situation.icon} {result.situation.title}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Backdrop to close dropdown when clicking outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleClose}
        />
      )}
    </div>
  );
}
