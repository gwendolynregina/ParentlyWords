import { Link } from 'react-router-dom';
import { situations } from '../data/phrases';
import { PhraseCard } from '../components/PhraseCard';
import { useSavedPhrases } from '../hooks/useSavedPhrases';

export function Saved() {
  const { savedIds, isSaved, toggleSaved } = useSavedPhrases();

  // Get all saved phrases with their situation context
  const savedPhrases = situations.flatMap(situation => 
    situation.phrases
      .filter(phrase => savedIds.has(phrase.id))
      .map(phrase => ({
        phrase,
        situation
      }))
  );

  return (
    <div className="min-h-screen bg-[#F2F5F5]">
      {/* Header */}
      <header className="sticky top-0 bg-[#FAFBFB]/95 backdrop-blur border-b border-[#D1D9D9] z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 -ml-2 hover:bg-[#E8ECEC] rounded-xl transition-colors"
              aria-label="Go back"
            >
              <span className="text-2xl text-[#566363]">←</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#5B9A9A]">★</span>
              <h1 className="text-xl sm:text-2xl font-bold text-[#2A3333]">
                Saved Phrases
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-6">
        {savedPhrases.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block text-[#7FB5B5]">☆</span>
            <h2 className="text-xl font-bold text-[#2A3333] mb-2">
              No saved phrases yet
            </h2>
            <p className="text-[#7A8A8A] mb-6">
              Tap the star on any phrase to save it here for quick access.
            </p>
            <Link
              to="/"
              className="inline-block py-3 px-6 bg-[#5B9A9A] text-white rounded-xl font-bold hover:bg-[#4A8080] transition-colors"
            >
              Browse Phrases
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Group by situation */}
            {situations.map(situation => {
              const situationPhrases = savedPhrases.filter(
                sp => sp.situation.id === situation.id
              );
              
              if (situationPhrases.length === 0) return null;

              return (
                <div key={situation.id}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{situation.icon}</span>
                    <h2 className="text-sm font-bold text-[#7A8A8A] uppercase tracking-wide">
                      {situation.title}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {situationPhrases.map(({ phrase }) => (
                      <PhraseCard
                        key={phrase.id}
                        phrase={phrase}
                        isSaved={isSaved(phrase.id)}
                        onToggleSave={() => toggleSaved(phrase.id)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
