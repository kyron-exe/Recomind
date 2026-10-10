import { useState, useEffect, useCallback } from 'react';
import './App.css';
import RecommendationCard from './components/RecommendationCard';
import MovieDetailModal from './components/MovieDetailModal';
import { RecomindHeader, CategoryRail, GenreRail } from './components/RecomindNav';
import { CATEGORY_GENRES } from './constants/catalog';
import { API_BASE, fetchApi } from './apiConfig';

async function fetchRecommendationsForGenre(category, genre) {
  const url = `${API_BASE}/api/recommend?category=${encodeURIComponent(category)}&genre=${encodeURIComponent(genre)}`;
  let response;
  try {
    response = await fetchApi(url);
  } catch {
    throw new Error('NETWORK');
  }
  if (!response.ok) {
    let detail = '';
    try {
      const errBody = await response.json();
      detail = typeof errBody.error === 'string' ? errBody.error : '';
    } catch {
      /* ignore */
    }
    throw new Error(detail ? `HTTP_${response.status}:${detail}` : `HTTP_${response.status}`);
  }
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

async function fetchMergedAllGenres(category) {
  const genres = CATEGORY_GENRES[category];
  if (!genres?.length) return [];
  const settled = await Promise.allSettled(genres.map((g) => fetchRecommendationsForGenre(category, g)));
  const seen = new Set();
  const merged = [];
  let firstError = null;
  for (const s of settled) {
    if (s.status === 'fulfilled') {
      for (const item of s.value) {
        const k = `${category}-${item.id}`;
        if (!seen.has(k)) {
          seen.add(k);
          merged.push(item);
        }
      }
    } else if (!firstError && s.reason instanceof Error) {
      firstError = s.reason;
    }
  }
  if (merged.length === 0 && firstError) {
    throw firstError;
  }
  return merged.slice(0, 48);
}

function App() {
  const [category, setCategory] = useState('Movies');
  const [genre, setGenre] = useState('All');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [detailItem, setDetailItem] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      let data;
      if (genre === 'All') {
        data = await fetchMergedAllGenres(category);
      } else {
        data = await fetchRecommendationsForGenre(category, genre);
      }
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setRecommendations([]);
      const msg = error instanceof Error ? error.message : String(error);
      if (msg === 'NETWORK') {
        setLoadError(
          `Could not reach the API at ${API_BASE}. Devices and production builds require an HTTPS backend configured with VITE_API_URL.`
        );
      } else if (msg.startsWith('HTTP_')) {
        setLoadError(`API error (${msg.replace(/^HTTP_(\d+).*/, '$1')}). Check that the backend is running on port 5000.`);
      } else {
        setLoadError('Something went wrong loading recommendations.');
      }
    }
    setLoading(false);
  }, [category, genre]);

  useEffect(() => {
    setDetailItem(null);
  }, [category, genre]);

  useEffect(() => {
    load();
  }, [load]);

  const onSelectCategory = (next) => {
    setCategory(next);
    setGenre('All');
  };

  const emptyAfterLoad = !loading && recommendations.length === 0 && !loadError;

  return (
    <div className="recomind-shell">
      <RecomindHeader />
      <CategoryRail category={category} onSelectCategory={onSelectCategory} />
      <GenreRail category={category} genre={genre} onSelectGenre={setGenre} />

      <section className="recomind-results" aria-live="polite">
        {loading ? (
          <div className="recomind-loading">
            <div className="recomind-spinner" aria-hidden />
            <span>Loading picks…</span>
          </div>
        ) : loadError ? (
          <p className="recomind-empty recomind-empty--error" role="alert">
            {loadError}
          </p>
        ) : emptyAfterLoad ? (
          <p className="recomind-empty">Nothing matched this filter. Try another genre.</p>
        ) : (
          recommendations.map((item) => (
            <RecommendationCard
              key={`${category}-${item.id}`}
              item={item}
              category={category}
              onOpenDetails={setDetailItem}
            />
          ))
        )}
      </section>

      {detailItem && (
        <MovieDetailModal
          item={detailItem}
          category={category}
          onClose={() => setDetailItem(null)}
          apiBase={API_BASE}
        />
      )}
    </div>
  );
}

export default App;
