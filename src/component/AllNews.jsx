import React, { useEffect, useState } from "react";

const AllNews = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 12;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const offset = (currentPage - 1) * limit;
        const response = await fetch(
          `http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=in&limit=${limit}&offset=${offset}`
        );
        const data = await response.json();
        setNews(data.data || []);
        if (!data.data || data.data.length < limit) setHasMore(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setHasMore(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (hasMore) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">All News from India</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden flex flex-col"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
            ) : (
              <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-lg font-semibold mb-2 text-blue-800 line-clamp-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {item.description || "No description available."}
              </p>
              <div className="text-xs text-gray-500 mt-auto">
                <span className="mr-2">{item.source}</span> |{" "}
                <span>{new Date(item.published_at).toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-medium text-blue-900">Page {currentPage}</span>
        <button
          onClick={handleNext}
          disabled={!hasMore}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllNews;
