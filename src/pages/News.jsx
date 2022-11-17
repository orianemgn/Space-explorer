import React, { useState } from "react";
import NewsCard from "../components/news-card/NewsCard";
import "./News.css";
import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch/useFetch";
import LoadingSpinner from "../components/loading-spinner/LoadingSpinner";

function News() {
  const newsFetch = "https://news-space.p.rapidapi.com/";
  const [newsResp, errorResp, isLoading] = useFetch(newsFetch);

  const [visible, setVisible] = useState(9);

  // function to add more cards on news page
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  if (isLoading) return <LoadingSpinner />;
  if (errorResp) return console.log(errorResp, <h2>An error has ocured...</h2>);

  return (
    <div className="news">
      <h1>NEWS</h1>
      {newsResp.data
        .filter(
          (item, index) =>
            index === newsResp.data.findIndex((other) => item.url === other.url)
        )
        .slice(1, visible)
        .map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            source={item.source}
            url={item.url}
          />
        ))}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="more-btn"
        onClick={showMoreItems}>
        SEE MORE NEWS UPDATES
      </motion.button>
    </div>
  );
}

export default News;
