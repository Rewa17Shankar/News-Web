// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function News({ user }) {
//   const apiKey = import.meta.env.VITE_NEWS_API_KEY;
//   const navigate = useNavigate();

//   const [news, setNews] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [hasMore, setHasMore] = useState(true);

//   const [likedPosts, setLikedPosts] = useState([]);
//   const [savedPosts, setSavedPosts] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(
//           `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=${page}&apiKey=${apiKey}`

//         );
//         const data = await response.json();

//         if (data.status !== "ok") throw new Error(data.message || "Error fetching news");

//         setNews((prev) => [...prev, ...data.articles]);

//         if (data.articles.length < 20) setHasMore(false);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [page, apiKey]);

//   useEffect(() => {
//     if (!user) {
//       setLikedPosts([]);
//       setSavedPosts([]);
//       return;
//     }

//     const fetchUserData = async () => {
//       try {
//         const [likedRes, savedRes] = await Promise.all([
//           fetch("/api/posts/liked", {
//             headers: { Authorization: `Bearer ${user.token}` },
//           }),
//           fetch("/api/posts/saved", {
//             headers: { Authorization: `Bearer ${user.token}` },
//           }),
//         ]);

//         if (!likedRes.ok || !savedRes.ok) throw new Error("Failed to fetch user data");

//         const likedData = await likedRes.json();
//         const savedData = await savedRes.json();

//         setLikedPosts(likedData);
//         setSavedPosts(savedData);
//       } catch (err) {
//         console.error("Error fetching liked/saved posts:", err);
//       }
//     };

//     fetchUserData();
//   }, [user]);

//   const toggleLike = async (url) => {
//     if (!user) {
//       alert("Please login to like posts!");
//       navigate("/login");
//       return;
//     }

//     const isLiked = likedPosts.includes(url);

//     try {
//       const response = await fetch("/api/posts/like", {
//         method: isLiked ? "DELETE" : "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//         body: JSON.stringify({ url }),
//       });

//       if (!response.ok) throw new Error("Failed to update like");

//       setLikedPosts((prev) =>
//         isLiked ? prev.filter((u) => u !== url) : [...prev, url]
//       );
//     } catch (err) {
//       alert("Error: " + err.message);
//     }
//   };

//   const toggleSave = async (url) => {
//     if (!user) {
//       alert("Please login to save posts!");
//       navigate("/login");
//       return;
//     }

//     const isSaved = savedPosts.includes(url);

//     try {
//       const response = await fetch("/api/posts/save", {
//         method: isSaved ? "DELETE" : "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//         body: JSON.stringify({ url }),
//       });

//       if (!response.ok) throw new Error("Failed to update save");

//       setSavedPosts((prev) =>
//         isSaved ? prev.filter((u) => u !== url) : [...prev, url]
//       );
//     } catch (err) {
//       alert("Error: " + err.message);
//     }
//   };

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h1>Latest News</h1>

//       {news.length === 0 && !loading && <p>No news found.</p>}

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {news.map((article, index) => (
//           <li
//             key={article.url || index}
//             style={{
//               border: "1px solid #ddd",
//               marginBottom: "1rem",
//               padding: "1rem",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>{article.title}</h3>
//             {article.urlToImage && (
//               <img
//                 src={article.urlToImage}
//                 alt={article.title}
//                 style={{ maxWidth: "100%", borderRadius: "4px" }}
//               />
//             )}
//             <p>{article.description}</p>
//             <a href={article.url} target="_blank" rel="noreferrer">
//               Read more
//             </a>

//             {/* Show Like/Save buttons only when user is logged in */}
//             {user && (
//               <div style={{ marginTop: "0.5rem" }}>
//                 <button
//                   onClick={() => toggleLike(article.url)}
//                   style={{
//                     marginRight: "1rem",
//                     backgroundColor: likedPosts.includes(article.url)
//                       ? "#ff6961"
//                       : "#eee",
//                     color: likedPosts.includes(article.url) ? "white" : "black",
//                     border: "none",
//                     padding: "0.5rem 1rem",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {likedPosts.includes(article.url) ? "Unlike ❤️" : "Like 🤍"}
//                 </button>

//                 <button
//                   onClick={() => toggleSave(article.url)}
//                   style={{
//                     backgroundColor: savedPosts.includes(article.url)
//                       ? "#77dd77"
//                       : "#eee",
//                     color: savedPosts.includes(article.url) ? "white" : "black",
//                     border: "none",
//                     padding: "0.5rem 1rem",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {savedPosts.includes(article.url) ? "Unsave 📌" : "Save 📍"}
//                 </button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {loading && <p>Loading...</p>}

//       {!loading && hasMore && (
//         <button onClick={() => setPage((prev) => prev + 1)} style={{ padding: "0.5rem 1rem" }}>
//           Load More
//         </button>
//       )}

//       {!hasMore && <p>No more articles to load.</p>}
//     </div>
//   );
// }

// export default News;









//MediaStack
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function News({ user }) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  const limit = 10; // Show only top 10 headlines

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.mediastack.com/v1/news?access_key=${apiKey}&countries=in&limit=${limit}&categories=general`
        );

        const data = await response.json();

        if (!data.data) throw new Error(data.error?.message || "Error fetching news");

        setNews(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  useEffect(() => {
    if (!user) {
      setLikedPosts([]);
      setSavedPosts([]);
      return;
    }

    const fetchUserData = async () => {
      try {
        const [likedRes, savedRes] = await Promise.all([
          fetch("/api/posts/liked", {
            headers: { Authorization: `Bearer ${user.token}` },
          }),
          fetch("/api/posts/saved", {
            headers: { Authorization: `Bearer ${user.token}` },
          }),
        ]);

        if (!likedRes.ok || !savedRes.ok) throw new Error("Failed to fetch user data");

        const likedData = await likedRes.json();
        const savedData = await savedRes.json();

        setLikedPosts(likedData);
        setSavedPosts(savedData);
      } catch (err) {
        console.error("Error fetching liked/saved posts:", err);
      }
    };

    fetchUserData();
  }, [user]);

  const toggleLike = async (url) => {
    if (!user) {
      alert("Please login to like posts!");
      navigate("/login");
      return;
    }

    const isLiked = likedPosts.includes(url);

    try {
      const response = await fetch("/api/posts/like", {
        method: isLiked ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) throw new Error("Failed to update like");

      setLikedPosts((prev) =>
        isLiked ? prev.filter((u) => u !== url) : [...prev, url]
      );
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const toggleSave = async (url) => {
    if (!user) {
      alert("Please login to save posts!");
      navigate("/login");
      return;
    }

    const isSaved = savedPosts.includes(url);

    try {
      const response = await fetch("/api/posts/save", {
        method: isSaved ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) throw new Error("Failed to update save");

      setSavedPosts((prev) =>
        isSaved ? prev.filter((u) => u !== url) : [...prev, url]
      );
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Top Headlines in India</h1>

      {news.length === 0 && !loading && <p>No news found.</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {news.map((article, index) => (
          <li
            key={article.url || index}
            style={{
              border: "1px solid #ddd",
              marginBottom: "1rem",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3>{article.title}</h3>
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                style={{ maxWidth: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
              />
            )}
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer">
              Read more
            </a>

            {user && (
              <div style={{ marginTop: "0.5rem" }}>
                <button
                  onClick={() => toggleLike(article.url)}
                  style={{
                    marginRight: "1rem",
                    backgroundColor: likedPosts.includes(article.url)
                      ? "#ff6961"
                      : "#eee",
                    color: likedPosts.includes(article.url) ? "white" : "black",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {likedPosts.includes(article.url) ? "Unlike ❤️" : "Like 🤍"}
                </button>

                <button
                  onClick={() => toggleSave(article.url)}
                  style={{
                    backgroundColor: savedPosts.includes(article.url)
                      ? "#77dd77"
                      : "#eee",
                    color: savedPosts.includes(article.url) ? "white" : "black",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {savedPosts.includes(article.url) ? "Unsave 📌" : "Save 📍"}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default News;
