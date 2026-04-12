import {
  FilmIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import { CATEGORIES, CATEGORY_GENRES } from '../constants/catalog';

const ICONS = {
  Movies: FilmIcon,
  Software: CpuChipIcon,
  Games: PuzzlePieceIcon,
  Books: BookOpenIcon,
};

export function RecomindHeader() {
  return (
    <header className="recomind-header">
      <div className="recomind-brand" aria-hidden>
        <svg className="recomind-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="12" fill="url(#rg)" />
          <path
            d="M20 8l2.2 6.8H29l-5.5 4 2.1 6.5L20 21.3l-5.6 4 2.1-6.5L11 14.8h6.8L20 8z"
            fill="white"
            opacity="0.95"
          />
          <defs>
            <linearGradient id="rg" x1="8" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 className="recomind-title">Recomind</h1>
      <p className="recomind-tagline">
        Your dynamic gateway to the best in movies, games, books, and software.
      </p>
    </header>
  );
}

export function CategoryRail({ category, onSelectCategory }) {
  return (
    <nav className="recomind-cats" aria-label="Browse category">
      <div className="recomind-cats-inner">
        {CATEGORIES.map((id) => {
          const Icon = ICONS[id];
          const active = category === id;
          return (
            <button
              key={id}
              type="button"
              className={`recomind-cat ${active ? 'recomind-cat--active' : ''}`}
              aria-pressed={active}
              onClick={() => onSelectCategory(id)}
            >
              <Icon className="recomind-cat-icon" aria-hidden />
              <span>{id}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function GenreRail({ category, genre, onSelectGenre }) {
  const genres = CATEGORY_GENRES[category] || [];

  return (
    <div className="recomind-genres-wrap">
      <nav className="recomind-genres" aria-label="Filter by genre">
        <button
          type="button"
          className={`recomind-genre ${genre === 'All' ? 'recomind-genre--active' : ''}`}
          onClick={() => onSelectGenre('All')}
        >
          All
        </button>
        {genres.map((g) => (
          <button
            key={g}
            type="button"
            className={`recomind-genre ${genre === g ? 'recomind-genre--active' : ''}`}
            onClick={() => onSelectGenre(g)}
          >
            {g}
          </button>
        ))}
      </nav>
    </div>
  );
}
