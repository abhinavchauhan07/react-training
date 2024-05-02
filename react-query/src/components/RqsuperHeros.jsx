import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import UseSuperHeroes from '../hooks/UseSuperHeroes'

const fetchSuperHeroes=()=>{
    return axios.get('http://localhost:4000/superheroes')
}
const RqsuperHeros = () => {
    //this hook require atleast two arguments
    //unique key like unique id
    //function that accepts the promise  
     
    // const {isLoading,data}=useQuery('super-heroes',()=>{
    //     return axios.get('http://localhost:4000/superheroes')

    // })

    const onSuccess=(data)=>{ // it also passes data to callback on sucess or errors
        console.log('perform side effect after data fetching',data)
    }
    const onError=()=>{
        console.log('perform side effect after encountering error')
    }
    // const {isLoading,data,isFetching,isError,error,refetch}=useQuery('super-heroes',
    // fetchSuperHeroes,
    // {
    //         //data is the response return by the api 
    //     select:(data)=>{ //data transformation , we can also filter
    //         const superHeroNames=data.data.map(hero=>hero.name)
    //         return superHeroNames
    //     },
    //     onSuccess:onSuccess,//shorthand of this is onSuccess
    //     onError//shorthand of this is onError
    //     // enabled:false,                         //if we want to fetch data on click not on the mount //for this firstly false it
    //     // refetchOnMount:false,
    //     // refetchOnWindowFocus:true,
    //     // refetchInterval:2000,  //knwn as polling used for stck chrts 
    //     // refetchIntervalInBackground:true //it will refetch data if the window losses focus it will continue in bckgrnd
    //     // staleTime:3000,
    //     // cacheTime:5000
    // })

    const{isLoading,data,isFetching,isError,error,refetch}=UseSuperHeroes(onSuccess,onError)

    if(isLoading||isFetching){
        return <h2>Loading...</h2>
    }
    if(isError)
    {
        return <h2>{error.message}</h2>
    }
  return (
    <div>
        <h2>RQ super Heroes page</h2>
        <button onClick={refetch}></button>
      {/* { 
        data?.data.map(ele=>{
            return <li key={ele.name}>{ele.name}</li>
        })
      } */}
      {
        data.map((heroName)=>{
            return <div key={heroName}>{heroName}</div>
        }
      )}
    </div>
  )
}

export default RqsuperHeros
//to reuse useQuery hook at differnt places we can use custom usequery