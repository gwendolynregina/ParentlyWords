import { Link } from 'react-router-dom';

interface SituationCardProps {
  id: string;
  title: string;
  icon: string;
  color: string;
}

export function SituationCard({ id, title, icon, color }: SituationCardProps) {
  return (
    <Link
      to={`/situation/${id}`}
      className={`${color} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 min-h-[140px] transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md border border-[#D1D9D9]`}
    >
      <span className="text-4xl" role="img" aria-hidden="true">
        {icon}
      </span>
      <span className="text-center text-[#2A3333] font-semibold text-base leading-tight">
        {title}
      </span>
    </Link>
  );
}
