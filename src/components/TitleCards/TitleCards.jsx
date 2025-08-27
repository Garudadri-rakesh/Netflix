import React, { useEffect, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCards = ({title,category}) => {


  const [apiData,SetApiData] = useState([]);

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDU5OGFiMWNkOWQ2MWFlZWViMzBlNjdhNzhlYjFlMSIsIm5iZiI6MTc1NTg0MzY2MS45OTYsInN1YiI6IjY4YTgwYzRkNTYwYzc0YmU0YmM1NmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QZum64Xk0Kjtt4LvdwmyaQH_5KdBiUQ8tVDhGUCVxxM'
  }
};


useEffect(() =>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => SetApiData(res.results))
  .catch(err => console.error(err));
})
  return (
    <div className='titlecards'>
        <h2>{title?title:"Popular on NetFlix"}</h2>
        <div className="card-list">
          {apiData.map((card,index) =>{
            return <Link to={`/Player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>

          })}
        </div>
      </div>
  );
}

export default TitleCards;
