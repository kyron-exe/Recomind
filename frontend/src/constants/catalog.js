/** Mirrors backend genre filters — do not rename without updating server data. */
export const CATEGORY_GENRES = {
  Movies: ['Action', 'Sci-Fi', 'Fantasy', 'Comedy', 'Drama', 'Thriller', 'Romance'],
  Books: ['Fiction', 'Mystery', 'Biography', 'Fantasy', 'Romance'],
  Games: ['RPG', 'FPS', 'Adventure', 'Sports'],
  Software: ['Productivity', 'Design', 'Development'],
};

/** Top tab order (matches Recomind mock). */
export const CATEGORIES = ['Movies', 'Software', 'Games', 'Books'];
