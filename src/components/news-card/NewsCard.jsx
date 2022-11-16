import React from "react";
import styles from "./styles.module.css";

function NewsCard({ title, source, url }) {
  return (
    <div className={styles.newsCard}>
      <h2>{title}</h2>
      <p>Source: {source}</p>

      <a href={url} target="_blank" rel="noreferrer">
        <button>Read More</button>
      </a>
    </div>
  );
}

export default NewsCard;
