import { useState, useEffect } from "react";
import React from 'react'
import axios from "axios"



function News() {

    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(3)

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3)
    }

    useEffect(() => {
        axios.get('https://news-space.p.rapidapi.com/').then((res) => setItems(res.data)).catch((err) => console.warn(err))
    }, [])



    return (
        <div className='news'>
            {
                items.slice(0, visible).map(item => (
                    <div>
                        <h2>{item.title}</h2>
                        <a href={item.url} target="_blank">
                            <button>More</button>
                        </a>
                        <p>{item.source}</p>
                    </div>
                ))
            }
            <button onClick={showMoreItems}>MORE items</button>
        </div>
    )
}

export default News
