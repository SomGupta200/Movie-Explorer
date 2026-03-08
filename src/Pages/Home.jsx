import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom' //--- navigate , Link is used for navigation without page reload, navigate is used for programmatic navigation
import { useState } from 'react'
import { getTrendingMovies } from '../Services/apiService'
function Home() {
  const[movies,setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setMovies(data.slice(0, 4)) //--- get top 4 trending movies
    }).catch((error) =>  console.error("Error fetching trending movies:", error)).finally(() => setLoading(false));
  },[])

  if(loading){
    return <h2 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">Loading...</h2>;
  }
  return (
    <div>
      <h1>Welcome to Movie Explorer</h1>
    </div>
  )
}

export default Home
