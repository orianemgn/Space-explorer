import React, { useState } from "react";
import NewsCard from "../components/news-card/NewsCard";
import "./News.css";
import { useFetch } from "../hooks/useFetch/useFetch";
import LoadingSpinner from "../components/news-card/loading-spinner/LoadingSpinner";

function News() {
  const newsFetch = "https://news-space.p.rapidapi.com/";
  const [newsResp, errorResp, isLoading] = useFetch(newsFetch);

  const [visible, setVisible] = useState(8);

  // function to add more cards on news page
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  if (isLoading) return <LoadingSpinner />;
  if (errorResp) return console.log(errorResp, <h2>An error has ocured...</h2>);

  return (
    <div className="news">
      <h1>NEWS</h1>
      {newsResp.data.slice(0, visible).map((item) => (
        <NewsCard title={item.title} source={item.source} url={item.url} />
      ))}
      <button className="more-btn" onClick={showMoreItems}>
        SEE MORE NEWS UPDATES
      </button>
    </div>
  );
}

export default News;
