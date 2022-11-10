import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styles from "./styles.module.css";
import NewsCard from "./NewsCard";

function News(params) {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(8);

  // function to add more cards on news page
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    axios
      .get("https://news-space.p.rapidapi.com/")
      .then((res) => setItems(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className={styles.news}>
      <h1>NEWS</h1>
      {items.slice(0, visible).map((item) => (
        <NewsCard title={item.title} source={item.source} url={item.url} />
      ))}
      <button className={styles.moreButton} onClick={showMoreItems}>
        SEE MORE NEWS UPDATES
      </button>
    </div>
  );
}

export default News;
