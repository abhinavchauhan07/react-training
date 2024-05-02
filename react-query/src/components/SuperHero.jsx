import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const SuperHero = () => {
  const[isLoading,setIsLoading]=useState(true)
  const[data,setData]=useState([])
  const[error,setError]=useState('')
  useEffect(()=>{
    axios.get('http://localhost:4000/superheroes').then((res)=>{
      setData(res.data)
      setIsLoading(false)
    }).catch(error=>{
      setError(error.message)
      setIsLoading(false)
    })
  },[])

  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(error)
  {
    return <h2>{error}</h2>
  }
  return (
    <div>
      <h2>Super Heroes</h2>
      {data.map((hero)=>{
        return <div key={hero.name}>{hero.name}</div>
      })}
    </div> 
  )
}

export default SuperHero
