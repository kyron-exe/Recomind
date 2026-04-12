import { useEffect, useState } from 'react';
import { API_BASE as DEFAULT_API } from '../apiConfig';

function PosterBlock({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return <div className="modal-poster-fallback" aria-hidden />;
  }
  return (
    <img
      className="modal-poster-img"
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

function pickPosterUrl(details) {
  if (!details?.ok) return null;
  return (
    details.posterUrlLarge ||
    details.posterUrl ||
    details.coverUrlLarge ||
    details.coverUrl ||
    null
  );
}

export default function MovieDetailModal({ item, category, onClose, apiBase = DEFAULT_API }) {
  const [details, setDetails] = useState(null);
  const [status, setStatus] = useState('idle');

  const isMovie = category === 'Movies';
  const isBook = category === 'Books';
  const isGame = category === 'Games';
  const isSoftware = category === 'Software';
  const isMedia = isMovie || isBook || isGame || isSoftware;

  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [item, onClose]);

  useEffect(() => {
    if (!item) {
      setDetails(null);
      setStatus('idle');
      return undefined;
    }
    if (!isMedia) {
      setDetails(null);
      setStatus('done');
      return undefined;
    }

    let cancelled = false;
    setStatus('loading');
    setDetails(null);

    let url;
    if (category === 'Movies') {
      url = `${apiBase}/api/movie-details?title=${encodeURIComponent(item.title)}`;
    } else if (category === 'Books') {
      url = `${apiBase}/api/book-details?title=${encodeURIComponent(item.title)}`;
    } else if (category === 'Games') {
      url = `${apiBase}/api/game-details?name=${encodeURIComponent(item.title)}`;
    } else {
      url = `${apiBase}/api/software-details?title=${encodeURIComponent(item.title)}`;
    }

    fetch(url)
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!cancelled) {
          setDetails(data);
          setStatus('done');
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [item, category, apiBase, isMedia]);

  if (!item) return null;

  const backdropUrl =
    details?.ok && (details.backdropUrl || details.posterUrlLarge || details.posterUrl);
  const panelBackdrop =
    (isMovie || isGame || isSoftware) && backdropUrl
      ? {
          backgroundImage: `linear-gradient(105deg, rgba(5,5,12,0.97) 0%, rgba(5,5,12,0.88) 42%, rgba(5,5,12,0.72) 100%), url(${details.backdropUrl || details.posterUrlLarge || details.posterUrl})`,
        }
      : undefined;

  const posterSrc = status === 'done' ? pickPosterUrl(details) : null;

  const overviewText =
    details?.ok && details.overview ? details.overview : item.description;

  const displayTitle = details?.ok ? details.title : item.title;

  return (
    <div className="modal-root">
      <button type="button" className="modal-scrim" aria-label="Close details" onClick={onClose} />

      <div
        className="modal-panel"
        style={panelBackdrop}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {isMedia && status === 'error' && (
          <div className="modal-banner modal-banner--error">
            Could not reach the server. Check that the backend is running.
          </div>
        )}

        <div className="modal-layout">
          {isMedia && (
            <div className="modal-poster-wrap">
              {status === 'loading' && <div className="modal-poster-skeleton" aria-busy="true" />}
              {status === 'done' && posterSrc && (
                <PosterBlock
                  key={`${item.id}-${posterSrc}`}
                  src={posterSrc}
                  alt={`Artwork for ${displayTitle}`}
                />
              )}
              {status === 'done' && !posterSrc && <PosterBlock src={null} alt="" />}
            </div>
          )}

          <div className="modal-body">
            {isMovie && status === 'loading' && (
              <p className="modal-fetching">Fetching poster and credits from TMDB…</p>
            )}
            {isBook && status === 'loading' && (
              <p className="modal-fetching">Fetching cover and data from Open Library…</p>
            )}
            {isGame && status === 'loading' && (
              <p className="modal-fetching">Fetching art and data from RAWG…</p>
            )}
            {isSoftware && status === 'loading' && (
              <p className="modal-fetching">Fetching summary from Wikipedia…</p>
            )}

            <h2 id="detail-title" className="modal-title">
              {displayTitle}
            </h2>

            {isMovie && details?.ok && details.tagline ? (
              <p className="modal-tagline">{details.tagline}</p>
            ) : null}

            <span className="badge">{item.genre}</span>

            {isMovie && details?.ok && (
              <p className="modal-meta-line">
                {[
                  details.duration,
                  details.year,
                  details.voteAverage != null
                    ? `${Number(details.voteAverage).toFixed(1)} / 10 TMDB`
                    : null,
                  details.voteCount != null ? `${details.voteCount.toLocaleString()} votes` : null,
                ]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            )}

            {isBook && details?.ok && (
              <p className="modal-meta-line">
                {[details.firstPublishYear, details.pageCount ? `${details.pageCount} pages (median)` : null]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            )}

            {isGame && details?.ok && (
              <p className="modal-meta-line">
                {[
                  details.released,
                  details.rating != null ? `${Number(details.rating).toFixed(2)} / 5 RAWG` : null,
                  details.metacritic != null ? `Metacritic ${details.metacritic}` : null,
                ]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            )}

            {isMovie && details?.ok && details.director && (
              <p className="modal-director">Directed by {details.director}</p>
            )}

            {isBook && details?.ok && details.authors && (
              <p className="modal-director">By {details.authors}</p>
            )}

            {isGame && details?.ok && details.developers && (
              <p className="modal-director">Developed by {details.developers}</p>
            )}

            {(isGame || isSoftware) && !details?.ok && item.developer && (
              <p className="modal-director">Catalog: {item.developer}</p>
            )}

            {isMovie && status === 'done' && !details?.ok && details?.reason === 'no_key' && (
              <p className="modal-banner">
                Real posters use The Movie Database. Copy <code className="modal-code">backend/.env.example</code> to{' '}
                <code className="modal-code">backend/.env</code>, add your free{' '}
                <code className="modal-code">TMDB_API_KEY</code>, then restart the server.
              </p>
            )}

            {isGame && status === 'done' && !details?.ok && details?.reason === 'no_key' && (
              <p className="modal-banner">
                Game art uses RAWG. Add <code className="modal-code">RAWG_API_KEY</code> to{' '}
                <code className="modal-code">backend/.env</code> (free at{' '}
                <a href="https://rawg.io/apidocs" target="_blank" rel="noreferrer" className="modal-link">
                  rawg.io/apidocs
                </a>
                ), then restart the server.
              </p>
            )}

            {isMovie && status === 'done' && !details?.ok && details?.reason === 'not_found' && (
              <p className="modal-banner">No TMDB listing matched this title. Showing your catalog summary below.</p>
            )}

            {isBook && status === 'done' && !details?.ok && details?.reason === 'not_found' && (
              <p className="modal-banner">No Open Library match for this title. Showing your catalog summary below.</p>
            )}

            {isGame && status === 'done' && !details?.ok && details?.reason === 'not_found' && (
              <p className="modal-banner">No RAWG match for this game. Showing your catalog summary below.</p>
            )}

            {isSoftware && status === 'done' && !details?.ok && details?.reason === 'not_found' && (
              <p className="modal-banner">
                No Wikipedia summary matched this title. Try a name closer to the English Wikipedia article title.
              </p>
            )}

            <p className="modal-overview">{overviewText}</p>

            {isMovie && details?.ok && details.genres?.length > 0 && (
              <div className="card-section">
                <h3 className="card-section-title">Genres</h3>
                <ul className="card-langs">
                  {details.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            )}

            {isBook && details?.ok && details.subjects?.length > 0 && (
              <div className="card-section">
                <h3 className="card-section-title">Subjects</h3>
                <ul className="card-langs">
                  {details.subjects.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {isGame && details?.ok && details.genres?.length > 0 && (
              <div className="card-section">
                <h3 className="card-section-title">Genres</h3>
                <ul className="card-langs">
                  {details.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            )}

            {isGame && details?.ok && details.platforms?.length > 0 && (
              <div className="card-section">
                <h3 className="card-section-title">Platforms</h3>
                <ul className="card-langs">
                  {details.platforms.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            {isMovie && details?.ok && details.languages?.length > 0 && (
              <div className="card-section">
                <h3 className="card-section-title">Languages</h3>
                <ul className="card-langs">
                  {details.languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </div>
            )}

            {isBook && details?.ok && details.languages?.length > 0 && (
              <div className="card-section">
                <h3 className="card-section-title">Languages</h3>
                <ul className="card-langs">
                  {details.languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </div>
            )}

            {isMovie && status === 'done' && (!details?.ok || details.reason === 'no_key') && item.languages?.length > 0 && (
              <div className="card-section">
                <h3 className="card-section-title">Languages (catalog)</h3>
                <ul className="card-langs">
                  {item.languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </div>
            )}

            {isMovie && status === 'done' && (!details?.ok || details.reason === 'no_key') && item.included?.length > 0 && (
              <div className="card-section">
                <h3 className="card-section-title">Included (catalog)</h3>
                <ul className="card-included">
                  {item.included.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {!isMedia && <p className="modal-muted">Live details are available for Movies, Books, Games, and Software.</p>}

            {isMovie && (
              <p className="modal-attribution">
                This product uses the TMDB API but is not endorsed or certified by TMDB.
              </p>
            )}

            {isBook && (
              <p className="modal-attribution">
                Book data and covers are provided by{' '}
                {details?.openLibraryWorkUrl ? (
                  <a href={details.openLibraryWorkUrl} target="_blank" rel="noreferrer" className="modal-link">
                    Open Library
                  </a>
                ) : (
                  'Open Library'
                )}
                .
              </p>
            )}

            {isGame && (
              <p className="modal-attribution">
                Game data from{' '}
                {details?.rawgUrl ? (
                  <a href={details.rawgUrl} target="_blank" rel="noreferrer" className="modal-link">
                    RAWG
                  </a>
                ) : (
                  <a href="https://rawg.io" target="_blank" rel="noreferrer" className="modal-link">
                    RAWG
                  </a>
                )}
                . This app is not endorsed by RAWG.
              </p>
            )}

            {isSoftware && (
              <p className="modal-attribution">
                Summary and images from{' '}
                {details?.articleUrl ? (
                  <a href={details.articleUrl} target="_blank" rel="noreferrer" className="modal-link">
                    Wikipedia
                  </a>
                ) : (
                  'Wikipedia'
                )}{' '}
                (text under CC BY-SA where applicable).
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
