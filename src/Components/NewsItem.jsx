import React from 'react'

import '../App.css';
import news_default from '../assets/news_default.jpeg'

const custom_description = "This article covers a significant development that reflects the dynamic and constantly evolving nature of global events. It offers insights into topics that keep readers informed and aware of the world around them. From technological breakthroughs and economic updates to cultural movements and human stories, it provides meaningful context and understanding. The story connects to ongoing trends shaping modern life, encouraging thoughtful reflection and awareness as new perspectives, innovations, and discussions continue to influence global society and daily experiences."

export default function NewsItem({title, description, image, link}) {
  return (
      <div className="card bg-dark text-light my-2 mx-2 mb-2 d-flex flex-column px-2 py-2" style={{width: "100%", height: "25rem"}}>
        <img src={image ? image:news_default} className="card-img-top hero-img" alt="..."  style={{maxHeight: "200px"}}/>
        <div className="card-body d-flex flex-column flex-grow-1 px-2 py-2">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text flex-grow-1">{description ? description.slice(0, 90) : custom_description.slice(0, 90)}</p>
          <a href={link} className="btn btn-primary mt-auto align-self-center" target="_blank">Read More</a>
        </div>
    </div>
  )
}

// "width: 18rem;"
