import { motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";

function NewsCard({ title, source, url }) {
  return (
    <motion.div
      //framer motion animation
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true }}
      //
      className={styles.newsCard}>
      <h2>{title}</h2>
      <p>Source: {source}</p>

      <a href={url} target="_blank" rel="noreferrer">
        <motion.button
          //framer motion animation
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          Read More
        </motion.button>
      </a>
    </motion.div>
  );
}

export default NewsCard;
