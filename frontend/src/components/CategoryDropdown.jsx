import { useState } from 'react';
import './Dropdown.css';

export default function CategoryDropdown({ category, setCategory, setGenre }) {
  const [open, setOpen] = useState(false);

  const categories = ['Movies', 'Books', 'Games', 'Software'];

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{category}</span>
        <span className="dropdown-chevron" aria-hidden>
          ▼
        </span>
      </button>

      {open && (
        <ul className="dropdown-menu" role="listbox">
          {categories.map((cat) => (
            <li
              key={cat}
              role="option"
              className="dropdown-item"
              onClick={() => {
                setCategory(cat);
                setGenre('Genre');
                setOpen(false);
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
