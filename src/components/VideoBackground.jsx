import React, { useEffect, useState } from 'react'
import { API_Options } from './utils/Constant'

const VideoBackground = ({movieId}) => {

  const [trailerKey,setTrailerKey] = useState(null)
  const getMovieTrailer = async () => {
   const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_Options)
    const json = await data.json()

    const filteredData = json.results.filter(video => video.type === "Trailer")
    const trailer = filteredData.length ? filteredData[0] : json.results[0]

    setTrailerKey(trailer.key)
  }
  useEffect(() => {
    getMovieTrailer()
  }, [])

  return (
    <div className=''>
      <iframe className='w-full aspect-video' src={"https://www.youtube.com/embed/"+ trailerKey + "?&autoplay=1&mute=1"}></iframe>
    </div>
  )
}

export default VideoBackground