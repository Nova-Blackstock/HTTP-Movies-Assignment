import React, { useState } from 'react'

const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const MovieForm = () =>{
    const [movie, setMovie] = useState(initialMovie)

    const changeHandler = e =>{
        e.persist()
        let value = e.target.value

        setMovie({
            ...movie,
            [e.target.name]: value
        })
        
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <div>
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    onChange={changeHandler}
                    placeholder='name'
                    value={movie.title}
                />

                <input
                    type='text'
                    name='director'
                    onChange={changeHandler}
                    placeholder='director'
                    value={movie.director}
                />

                <input
                    type='number'
                    name='metascore'
                    onChange={changeHandler}
                    placeholder='metascore: '
                    value={movie.metascore}
                />

                <button className='md-button Movieform-button'>Add Movie</button>
            </form>
        </div>
    )
}

export default MovieForm