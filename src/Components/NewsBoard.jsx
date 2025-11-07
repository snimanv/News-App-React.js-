// import React from 'react'
// import { useEffect, useState } from 'react';
// import NewsItem from './NewsItem';

// export default function NewsBoard() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const api_key = import.meta.env.VITE_NEWS_API_KEY;

//   useEffect(() => {

//     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
//     // let url = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${api_key}`;
//     // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
//     // let url = `https://newsapi.org/v2/everything?q=tesla&from=2025-10-05&sortBy=publishedAt&apiKey=d7608699d62b406cacf33b29ca118c6d`;
//     // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 'ok' && data.articles) {
//           setArticles(data.articles);
//         } else {
//           console.error("API Error:", data.message || "Unknown error");
//           setArticles([]);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching news articles:", error);
//         setArticles([]);
//       })
//       .finally(() => {
//         setLoading(false);
//       });

//   }, []);

//   return (
//     <div>
//       <h2 className='hero-header'>Latest <span className='hero-header-highlight'>News</span></h2>
//       {loading ? (
//         <p>Loading news...</p>
//       ) : (
//         articles.length > 0 ? (
//           articles.map((news, index) => (
//             <NewsItem key={index} title={news.title} description={news.description} image={news.urlToImage} link={news.url} />
//           ))
//         ) : (
//           <p>No news articles available.</p>
//         )
//       )}
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { fetchNews } from '../news_response';

export default function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getNews() {
      const data = await fetchNews(category);
      setArticles(data);
      setLoading(false);
    }

    getNews();
  }, [category]);

  return (
    <div>
      <h2 className="hero-header">
        Latest <span className="hero-header-highlight">News</span>- {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>

      <div className="row justify-content-center">
        {loading ? (<p>Loading news...</p>) : articles.length > 0 ? (
        articles.map((news, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-3">
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              image={news.urlToImage}
              link={news.url}
            />
          </div>
        ))
      ) : (
        <p>No news articles available.</p>
      )}
      </div>
    </div>
  );
}
