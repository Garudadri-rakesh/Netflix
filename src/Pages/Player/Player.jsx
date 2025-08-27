import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import {useNavigate, useParams} from 'react-router-dom';


const Player = () => {


  const{id} = useParams();

  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name : "",
    key : "",
    published_at : "",
    typeof : ""
  })


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDU5OGFiMWNkOWQ2MWFlZWViMzBlNjdhNzhlYjFlMSIsIm5iZiI6MTc1NTg0MzY2MS45OTYsInN1YiI6IjY4YTgwYzRkNTYwYzc0YmU0YmM1NmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QZum64Xk0Kjtt4LvdwmyaQH_5KdBiUQ8tVDhGUCVxxM'
  }
};



useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

},[])



  return (
    <div className='Player'>
      <img src={back_arrow_icon}   alt="" onClick={() => {navigate(-2)}} />
      <iframe width="90%" height="90%"
      src={`http://www.youtube.com/embed/${apiData.key}`} 
      title="trailer" allowFullScreen
      frameborder="0"></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      
    </div>
  );
}

export default Player
    