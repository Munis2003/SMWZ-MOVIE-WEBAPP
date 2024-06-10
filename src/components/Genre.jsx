import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import {Helmet} from "react-helmet";

function Genre() {
    const { fetchGenre, activegenre, setActiveGenre, genres, setMovies, page, setPage, filteredGenre } = useContext(Contextpage);    


    useEffect(() => {
        fetchGenre();  // Fetching Genres on Initial Render.
    }, [])


    // const filterFunc = () => {
    //     if (activegenre === 0) {
    //         setFiltered(movies)
    //     } else {
    //         const filteredgenre = movies.filter((movie) =>
    //           movie.genre_ids.includes(activegenre)
    //         );
    //         setFiltered(filteredgenre);
    //     }
    // }

    return (
        <>
        <Helmet>
            <title>SMWZ | Genres</title>
        </Helmet>

        <div className='w-[100%] flex flex-nowrap overflow-hidden overflow-x-scroll [&::-webkit-scrollbar]:hidden  '>
            {
                genres.map((genre) => (

                    <button
                        onClick={() => setActiveGenre(genre.id)}
                        className={activegenre === genre.id ? 'active  m-2 text-[13px] px-4 text-white/90 font-semibold rounded-lg' : ' m-2 px-4 text-[13px] bg-[#202830] text-white/90 font-semibold rounded-lg'} key={genre.id}>
                        {genre.name}
                    </button>

                ))
            }
            </div>
            </>
    )
}

export default Genre
