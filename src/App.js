import React from 'react';

import './App.css';
import { Button } from '@material-ui/core';
import News from './components/News/News';
import {useState, useEffect} from 'react';
import Axios from 'axios';
function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() =>{
  //   const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a3635485609457db2a537e0aea9a1bf';
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => setArticles(data.articles))

  // },[])

  useEffect(() =>{
    const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a3635485609457db2a537e0aea9a1bf';
    Axios(url)
    .then(data => setArticles(data.data.articles))
  })

  return (
    <div>
      
      <h2>headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
