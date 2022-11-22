import { motion } from "framer-motion";
import React from "react";
import "./LinksModal.css";

//framer motion variant
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
//

function LinksModal({ onClick, linkArr }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overlay"
      onClick={onClick}>
      <motion.div
        className="modalContainer"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">
        <p className="closeBtn" onClick={onClick}>
          close
        </p>
        {linkArr.map((e) => {
          return (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={e.link}
              target="_blank"
              rel="noreferrer"
              alt={e.userName}>
              {e.userName}
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default LinksModal;
