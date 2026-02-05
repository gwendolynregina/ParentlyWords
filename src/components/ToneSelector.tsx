import type { Tone } from '../data/phrases';

interface ToneSelectorProps {
  selected: Tone;
  onChange: (tone: Tone) => void;
}

const tones: { value: Tone; label: string; selectedClass: string }[] = [
  { 
    value: 'gentle', 
    label: 'Gentle', 
    selectedClass: 'bg-[#E5F2F2] text-[#4A8080] border border-[#5B9A9A]' 
  },
  { 
    value: 'neutral', 
    label: 'Neutral', 
    selectedClass: 'bg-[#F2F5F5] text-[#566363] border border-[#7A8A8A]' 
  },
  { 
    value: 'firm', 
    label: 'Firm', 
    selectedClass: 'bg-[#FDF0ED] text-[#C47A6A] border border-[#E89B8C]' 
  },
];

export function ToneSelector({ selected, onChange }: ToneSelectorProps) {
  return (
    <div className="flex gap-2 p-1.5 bg-[#E8ECEC] rounded-full">
      {tones.map(({ value, label, selectedClass }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`
            px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200
            ${selected === value 
              ? `${selectedClass} shadow-sm` 
              : 'text-[#7A8A8A] hover:text-[#566363]'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
