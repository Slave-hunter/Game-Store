import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList() {
    const [genreList,setGenreList]=useState([])
    const [activeIndex,setActiveIndex]=useState(0)

    useEffect(()=>{
        getGenreList();

    },[])

    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp.data.results);
            setGenreList(resp.data.results);
    })
}
  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
        {genreList.map((item,index)=>(
            <div onClick={()=>setActiveIndex(index)}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-green-500 p-2 rounded-lg hover:dark:bg-green-700 group ${activeIndex==index?"bg-green-500 dark:bg-green-700":null}`}>

                <img src={item.image_background} 


                className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300${activeIndex==index?"scale-105":null}  `}/>


                <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex==index?"font:bold":null}`}>{item.name}</h3>
            </div>
        ))}

    </div>
  )
}

export default GenreList