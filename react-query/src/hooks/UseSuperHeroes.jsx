import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
const fetchSuperHeroes=()=>{
    return axios.get('http://localhost:4000/superheroes')
}
export const UseSuperHeroes = (onSuccess,onError) => {
    
    return useQuery('super-heroes',
    fetchSuperHeroes,
    {
            //data is the response return by the api 
        select:(data)=>{ //data transformation , we can also filter
            const superHeroNames=data.data.map(hero=>hero.name)
            return superHeroNames
        },
        onSuccess:onSuccess,//shorthand of this is onSuccess
        onError//shorthand of this is onError
        // enabled:false,                         //if we want to fetch data on click not on the mount //for this firstly false it
        // refetchOnMount:false,
        // refetchOnWindowFocus:true,
        // refetchInterval:2000,  //knwn as polling used for stck chrts 
        // refetchIntervalInBackground:true //it will refetch data if the window losses focus it will continue in bckgrnd
        // staleTime:3000,
        // cacheTime:5000
    })
}

export default UseSuperHeroes
