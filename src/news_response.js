const api_key = import.meta.env.VITE_NEWS_API_KEY;

/**
 * Fetches top headlines for a given country
 * @param {string} country - country code (default: 'us')
 * @returns {Promise<Array>} - list of news articles
 */

export async function fetchNews(category = category) {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'ok' && data.articles) {
      return data.articles;
    } else {
      console.error('API Error:', data.message || 'Unknown error');
      return [];
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}
