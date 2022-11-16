import { motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";

function NewsCard({ title, source, url }) {
  return (
    <div className={styles.newsCard}>
      <h2>{title}</h2>
      <p>Source: {source}</p>

      <a href={url} target="_blank" rel="noreferrer">
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          Read More
        </motion.button>
      </a>
    </div>
  );
}

export default NewsCard;
