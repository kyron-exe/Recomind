import { StarIcon } from '@heroicons/react/24/solid';
import { CalendarIcon } from '@heroicons/react/24/outline';

function cardRating(id) {
  const x = ((Number(id) || 0) * 9301 + 49297) % 233280;
  return (7 + (x / 233280) * 2.4).toFixed(1);
}

function cardYear(item, category) {
  if (item.year != null) return item.year;
  const y = 1990 + (Math.abs(Number(item.id) * 7919) % 28);
  if (category === 'Movies') return y;
  if (category === 'Books') return y;
  return y;
}

export default function RecommendationCard({ item, category, onOpenDetails }) {
  const rating = cardRating(item.id);
  const year = cardYear(item, category);

  return (
    <article className="recomind-card">
      <button
        type="button"
        className="recomind-card__hit"
        onClick={() => onOpenDetails(item)}
        aria-label={`Details for ${item.title}`}
      >
        <div className="recomind-card__top">
          <span className="recomind-card__genre">{item.genre}</span>
          <span className="recomind-card__rating">
            <StarIcon className="recomind-card__star" aria-hidden />
            {rating}
          </span>
        </div>
        <h3 className="recomind-card__title">{item.title}</h3>
        <p className="recomind-card__desc">{item.description}</p>
        <div className="recomind-card__foot">
          <CalendarIcon className="recomind-card__cal" aria-hidden />
          <span>{year}</span>
        </div>
      </button>
    </article>
  );
}
