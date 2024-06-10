import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Contextpage from '../Contextpage';
import { HiChevronLeft } from "react-icons/hi";
import noimage from '../assets/images/movies.jpg'
import { FaPlay } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import slugify from 'react-slugify';

export const Detail = () => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const { loader, setLoader } = useContext(Contextpage);

  const { id } = useParams()

  const [moviedet, setMoviedet] = useState([]);
  const [castdata, setCastdata] = useState([]);
  const [moviegenres, setMoviegenres] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
    );
    const moviedetail = await data.json();
    setMoviedet(moviedetail);
    // console.log(moviedetail);
    setMoviegenres(moviedetail.genres);
    setLoader(false);
  };

  const fetchCast = async () => {
    const castdata = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language`
    );
    const castdetail = await castdata.json();
    setCastdata(castdetail.cast);
    setLoader(false);
  }

  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`
    );
    const videodata = await data.json();
    setVideo(videodata.results);
    // console.log(videodata.results);
  }

  useEffect(() => {
    fetchMovie();
    fetchCast();
    fetchVideo();
  }, []);

  
  return (

    <>
      {
        loader ? <div className='h-screen w-full flex justify-center items-center'><span className="loader m-10"></span></div> :
          <>

            <Link to="/" className='fixed z-10 text-4xl text-[#202830]  bg-white/50 m-3 md:m-5 rounded-full'><HiChevronLeft /></Link>

            {/* poster */}
            <div className='relative flex rounded-xl overflow-hidden'>
              <div className='h-full w-full shadowbackdrop absolute'></div>
              {moviedet.backdrop_path === null ? <img src={noimage} className='object-cover w-[100%] h-[100%]' /> : <img src={"https://image.tmdb.org/t/p/original/" + moviedet.backdrop_path} className='h-full w-full' />}
            </div>

            {/* overview */}
            <h1 className='text-white/90 p-10 pb-0 px-3 text-xl md:text-[3.5vw] font-[poppins] font-semibold'>{moviedet.title}</h1>
            <h2 className=' w-[90%] text-white/90 pt-5 px-3 font-[poppins] font-[350] text-[14px]'>{moviedet.overview}</h2>

            <div className='text-zinc-200 font-semibold my-3 flex px-3'>
              <h2 className='bg-[#202830] py-2 px-5 rounded-xl'>Release Date : {moviedet.release_date}</h2>
            </div>

            {/* tag */}
            <div className='flex flex-wrap'>
              {moviegenres.map((tag) => (
                <>
                  <div key={tag.id} className='text-white font-semibold bg-[#202830] rounded-lg px-7 py-1 m-2 ml-3'>{tag.name}</div>
                </>
              ))}
            </div>

            {/* cast */}
            <div className='flex flex-col'>
              <h1 className="text-3xl font-[poppins] font-[450] mt-5 text-zinc-300  p-3 pb-0">Cast</h1>

              <div className=" px-3 flex flex-row my-5 max-w-full flex-start overflow-x-auto relative
              scrollbar-thin scrollbar-thumb-[#202830] scrollbar-track-[#0a1016] md:pb-3 rounded-xl">
                {castdata.map((cast) => (
                  <>
                    {cast.profile_path !== null ? <>
                      <div className='flex min-w-[9rem] md:min-w-[12rem] max-w-[9rem] md:max-w-[10rem] h-full ml-5 flex-col mx-1'>
                        <LazyLoadImage effect='blur' src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} className="w-full h-full rounded-xl" />
                        <p className='text-white/90 text-md px-3'>{cast.name}</p>
                        <p className='text-zinc-400 text-xs px-3'>({cast.character})</p>
                      </div>
                    </> : null}
                  </>
                ))}
              </div>
            </div>

            {/* trailer */}
            <div className='flex px-3 items-center mb-10 gap-5 flex-wrap'>
              {Array.from(video).filter(trail => trail.type === "Trailer").map((trail, index) => (
                <>
                    <>
                    {/* <a key={trail.id} href={'https://www.youtube.com/watch?v=' + trail.key} target="_blank" ></a> */}
                      <a key={trail.id} href={'https://www.youtube.com/watch?v=' + trail.key} target="_blank" className='flex  bg-[#202830] p-3 items-center justify-center gap-2 text-xl font-semibold rounded-xl text-white/90'>
                        <FaPlay />Watch trailer {Array.from(video).filter(trail => trail.type === "Trailer").length>1?index+1:""}
                      </a>
                    </>
                </>
              ))
              }
            </div>

            {/* watch movie */}
            <div className='flex items-center mb-10 gap-5 flex-wrap px-3'>
              <Link  to={`/player/${id}/${slugify(moviedet.title)}`} className='flex bg-[#202830] p-3 items-center justify-center gap-2 text-xl font-semibold rounded-xl text-white/90'>
                <FaPlay />Watch Movie
              </Link>
            </div>
          </>
      }
    </>
  )
}
