import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSituationById, getPhrasesByTone } from '../data/phrases';
import type { Tone } from '../data/phrases';
import { ToneSelector } from '../components/ToneSelector';
import { PhraseCard } from '../components/PhraseCard';
import { useSavedPhrases } from '../hooks/useSavedPhrases';

export function Situation() {
  const { id } = useParams<{ id: string }>();
  const [selectedTone, setSelectedTone] = useState<Tone>('gentle');
  const { isSaved, toggleSaved } = useSavedPhrases();
  const [showComingSoon, setShowComingSoon] = useState(false);

  const situation = id ? getSituationById(id) : undefined;

  if (!situation) {
    return (
      <div className="min-h-screen bg-[#F2F5F5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#566363] text-lg mb-4">Situation not found</p>
          <Link to="/" className="text-[#5B9A9A] hover:text-[#4A8080] font-semibold hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const phrases = getPhrasesByTone(situation, selectedTone);

  return (
    <div className="min-h-screen bg-[#F2F5F5]">
      {/* Header */}
      <header className="sticky top-0 bg-[#FAFBFB]/95 backdrop-blur border-b border-[#D1D9D9] z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/"
              className="p-2 -ml-2 hover:bg-[#E8ECEC] rounded-xl transition-colors"
              aria-label="Go back"
            >
              <span className="text-2xl text-[#566363]">←</span>
            </Link>
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-3xl flex-shrink-0">{situation.icon}</span>
              <h1 className="text-xl sm:text-2xl font-bold text-[#2A3333] truncate">
                {situation.title}
              </h1>
            </div>
            <Link
              to="/saved"
              className="p-2 hover:bg-[#E8ECEC] rounded-xl transition-colors flex-shrink-0"
              aria-label="View saved phrases"
            >
              <span className="text-2xl text-[#5B9A9A]">★</span>
            </Link>
          </div>
          
          {/* Tone Selector */}
          <div className="flex justify-center">
            <ToneSelector selected={selectedTone} onChange={setSelectedTone} />
          </div>
        </div>
      </header>

      {/* Phrases */}
      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {phrases.map((phrase) => (
            <PhraseCard
              key={phrase.id}
              phrase={phrase}
              isSaved={isSaved(phrase.id)}
              onToggleSave={() => toggleSaved(phrase.id)}
            />
          ))}
        </div>

        {phrases.length === 0 && (
          <p className="text-center text-[#7A8A8A] py-8 font-medium">
            No phrases available for this tone yet.
          </p>
        )}
      </main>

      {/* Say it another way - Coming Soon */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FAFBFB] border-t border-[#D1D9D9] p-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setShowComingSoon(true)}
            className="w-full py-4 px-6 bg-[#E8ECEC] hover:bg-[#D1D9D9] rounded-xl font-semibold text-[#7A8A8A] transition-colors flex items-center justify-center gap-2"
          >
            <span>✨</span>
            <span>Say it another way</span>
          </button>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div 
          className="fixed inset-0 bg-[#2A3333]/40 flex items-center justify-center z-50 p-4"
          onClick={() => setShowComingSoon(false)}
        >
          <div 
            className="bg-[#FAFBFB] rounded-2xl p-6 max-w-sm w-full text-center shadow-xl border border-[#D1D9D9]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-5xl mb-4 block">🚀</span>
            <h2 className="text-xl font-bold text-[#2A3333] mb-2">
              Coming Soon!
            </h2>
            <p className="text-[#566363] mb-6">
              In a future update, you'll be able to write your own phrases and get instant translations to French and Mandarin.
            </p>
            <button
              onClick={() => setShowComingSoon(false)}
              className="w-full py-3 bg-[#5B9A9A] text-white rounded-xl font-bold hover:bg-[#4A8080] transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Spacer for fixed bottom bar */}
      <div className="h-24"></div>
    </div>
  );
}
