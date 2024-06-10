import React, { useState, useEffect ,useContext} from 'react'
import { Link } from 'react-router-dom'
import noimage from '../assets/images/no-image.jpg'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { toast } from 'react-toastify';
import Contextpage from '../Contextpage';

function Moviecard({ movie }) {
    const { user } = useContext(Contextpage);

    const [isBookmarked, setIsBookmarked] = useState(null);

    useEffect(() => {
        if (localStorage.getItem(movie.id)) {
            setIsBookmarked(true);
        } else {
            setIsBookmarked(false);
        }
    }, [movie.id]);

    const BookmarkMovie = () => {
        if (!user) {
            toast.info("To bookmark this movie, please log in.");
        } else {
            setIsBookmarked(!isBookmarked)
            if (isBookmarked) {
                localStorage.removeItem(movie.id);
            } else {
                localStorage.setItem(movie.id, JSON.stringify(movie));
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            layout
            className="card relative  w-[100%] md:w-[17.7%] h-full md: mr-[2.3%] mb-5  cursor-pointer rounded-xl overflow-hidden ">
            
            {/* bookmark buttons */}
            {/* <button className="absolute top-[80%] backdrop-blur-2xl bg-black/10... border-[1.4px] text-yellow-400 p-2 z-20 right-0 m-3 rounded-full text-xl" onClick={BookmarkMovie}> {isBookmarked ? <AiFillStar /> : <AiFillStar/>}</button> */}

            <div className='relative hover:cursor-pointer min-w-44 h-full overflow-hidden rounded-xl hover:border-[3px] object-coverborder-zinc-200'>
     <div> 
     <div className='flex items-center gap-1 absolute top-[5%] w-[20%] h-[6%] border-[1.4px] backdrop-blur-md bg-white/90...  left-[5%] p-2 px-8 pl-1 rounded-md  text-[10px] font-[500] text-white/90'><h1>{movie.vote_average.toFixed(1)}</h1><i className="ri-star-fill text-yellow-400"></i ></div>
     <div className='flex items-center justify-center absolute top-[5%] w-[20%] h-[6%] border-[1.4px] backdrop-blur-md bg-white/90... p-2  left-[70%] rounded-md  text-[10px] font-[500] text-white/90'><h1>{movie.release_date.slice(0,4)}</h1></div>  
     </div>
     
   <Link to={`/moviedetail/${movie.id}`} className='h-full w-full shadow absolute z-10'></Link>
  
   <div>
    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}  />
    
 </div>
 </div>
        </motion.div>
    )
}

export default Moviecard



// {/* <div className='relative hover:cursor-pointer min-w-44 h-full overflow-hidden rounded-xl'>
// <div>
//     {movie.poster_path === null ? <img className='object-cover hover:border-[3px] rounded-xl border-zinc-200' src={noimage} /> :
//         <LazyLoadImage effect='blur' className='object-cover hover:border-[3px] rounded-xl border-zinc-200' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />}
// </div>
//     <div className='flex items-center gap-2 absolute top-[5%] w-[20%] h-[6%] border-[1.4px] backdrop-blur-md bg-white/90...  left-[5%] pl-1 rounded-md  text-[10px] font-[500] text-white'><h1>{movie.vote_average.toFixed(1)}</h1><i className="ri-star-fill text-yellow-400"></i ></div>
//     <div className='flex items-center justify-center absolute top-[5%] w-[20%] h-[6%] border-[1.4px] backdrop-blur-md bg-white/90...  left-[70%] rounded-md  text-[10px] font-[500] text-white'><h1>{movie.release_date.slice(0,4)}</h1></div>
//   </div> */}
