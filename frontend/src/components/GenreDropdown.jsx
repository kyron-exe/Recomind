import { useState } from 'react';
import './Dropdown.css';

const genreOptions = {
  Movies: ['Action', 'Sci-Fi', 'Fantasy', 'Comedy', 'Drama', 'Thriller', 'Romance'],
  Books: ['Fiction', 'Mystery', 'Biography', 'Fantasy', 'Romance'],
  Games: ['RPG', 'FPS', 'Adventure', 'Sports'],
  Software: ['Productivity', 'Design', 'Development'],
};

export default function GenreDropdown({ genre, setGenre, category }) {
  const [open, setOpen] = useState(false);

  const genres = genreOptions[category] || [];

  return (
    <div className="dropdown dropdown--genre">
      <button
        type="button"
        className="dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={category === 'Options'}
        onClick={() => category !== 'Options' && setOpen(!open)}
      >
        <span>{genre}</span>
        <span className="dropdown-chevron" aria-hidden>
          ▼
        </span>
      </button>

      {open && genres.length > 0 && (
        <ul className="dropdown-menu" role="listbox">
          {genres.map((g) => (
            <li
              key={g}
              role="option"
              className="dropdown-item"
              onClick={() => {
                setGenre(g);
                setOpen(false);
              }}
            >
              {g}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
