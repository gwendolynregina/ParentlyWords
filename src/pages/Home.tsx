import { Link } from 'react-router-dom';
import { situations } from '../data/phrases';
import { SituationCard } from '../components/SituationCard';

export function Home() {
  return (
    <div className="min-h-screen bg-[#F2F5F5] px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Top bar with logo and saved link */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src="/icon.svg" alt="" className="h-10 sm:h-12 w-auto" />
            <span className="text-xl sm:text-2xl font-bold text-[#2A3333]">ParentlyWords</span>
          </div>
          <Link
            to="/saved"
            className="flex items-center gap-2 px-4 py-2 text-[#566363] hover:text-[#2A3333] hover:bg-[#E8ECEC] rounded-xl transition-colors"
          >
            <span className="text-xl">★</span>
            <span className="font-semibold">Saved</span>
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#2A3333] mb-3">
            What's happening right now?
          </h1>
          <p className="text-[#566363] text-lg">
            Tap a situation to find the right words
          </p>
        </header>

        {/* Situation Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {situations.map((situation) => (
            <SituationCard
              key={situation.id}
              id={situation.id}
              title={situation.title}
              icon={situation.icon}
              color={situation.color}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-14 text-center">
          <p className="font-bold text-[#5B9A9A] text-lg">ParentlyWords</p>
          <p className="mt-1 text-[#7A8A8A] text-sm">Helpful parenting phrases, across languages.</p>
        </footer>
      </div>
    </div>
  );
}
