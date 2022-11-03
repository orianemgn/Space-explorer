import React from 'react'
import styles from './styles.module.css'

function NewsCard(params) {
    return (
        <div className={styles.newsCard}>
            <h2>{params.title}</h2>
            <p>Source: {params.source}</p>
            <a href={params.url} target="_blank" rel="noreferrer">
                <button>Read More</button>

            </a>
        </div>
    )
}

export default NewsCard