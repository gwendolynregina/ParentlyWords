import { useState } from 'react';
import type { Phrase } from '../data/phrases';

interface PhraseCardProps {
  phrase: Phrase;
  isSaved: boolean;
  onToggleSave: () => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function PhraseCard({ phrase, isSaved, onToggleSave, isExpanded, onToggleExpand }: PhraseCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy:', e);
    }
  };

  const copyAll = () => {
    const text = `${phrase.english}\n\nFrench: ${phrase.french}\n\nMandarin: ${phrase.mandarin}\nPinyin: ${phrase.pinyin}`;
    handleCopy(text);
  };

  return (
    <div 
      className={`
        bg-[#FAFBFB] rounded-2xl shadow-sm border border-[#D1D9D9]
        overflow-hidden transition-all duration-300
        ${isExpanded ? 'ring-2 ring-[#7FB5B5]' : ''}
      `}
    >
      {/* Main touchable area */}
      <button
        onClick={onToggleExpand}
        className="w-full p-5 text-left flex items-start gap-4 hover:bg-[#F2F5F5] transition-colors"
      >
        <span className="text-xl flex-shrink-0 mt-0.5 text-[#5B9A9A]">
          {isExpanded ? '▼' : '▶'}
        </span>
        <p className="text-lg text-[#2A3333] leading-relaxed flex-1 font-medium">
          {phrase.english}
        </p>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-[#E8ECEC]">
          {/* French */}
          <div className="mt-4 p-4 bg-[#E5F2F2] rounded-xl border border-[#B8D4D4]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-[#4A8080]">French</span>
              <span className="text-xs">🇫🇷</span>
            </div>
            <p className="text-[#3D6666] text-lg leading-relaxed font-medium">
              {phrase.french}
            </p>
          </div>

          {/* Mandarin */}
          <div className="mt-3 p-4 bg-[#FDF0ED] rounded-xl border border-[#F5C4BA]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-[#C47A6A]">Mandarin</span>
              <span className="text-xs">🇨🇳</span>
            </div>
            <p className="text-[#8A5045] text-2xl leading-relaxed mb-2 font-medium">
              {phrase.mandarin}
            </p>
            <p className="text-[#B07A6F] text-base italic">
              {phrase.pinyin}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={copyAll}
              className="flex-1 py-3 px-4 bg-[#E8ECEC] hover:bg-[#D1D9D9] rounded-xl font-semibold text-[#566363] transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <span>✓</span>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <span>📋</span>
                  <span>Copy All</span>
                </>
              )}
            </button>
            <button
              onClick={onToggleSave}
              className={`
                py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2
                ${isSaved 
                  ? 'bg-[#E5F2F2] text-[#4A8080] hover:bg-[#D0E5E5] border border-[#5B9A9A]' 
                  : 'bg-[#E8ECEC] text-[#566363] hover:bg-[#D1D9D9]'
                }
              `}
            >
              <span>{isSaved ? '★' : '☆'}</span>
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
