import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'


const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
}

export default function UpdateMoveForm(props){
    console.log('updatemovieformrenders')
    const { id } = useParams()
    const history = useHistory()
    const [movie, setMovie] = useState(initialMovie)

    useEffect(() =>{
        axios.get(`http://localhost:5000/api/movies/${id}`)
           .then(res =>{
               console.log(res)
               setMovie(res.data)
           })
           .catch(err =>{
               console.error(err)
           }, [id])

    })

    const changeHandler = e => {
        e.persist()
        let value = e.target.value
        setMovie({
            ...movie,
            [e.target.name]: value
        })

    }

    const handleSubmit = e =>{
        e.preventDefault()

        axios
           .put(`http://localhost:5000/movies/${id}`. movie)
           .then(res =>{
               props.setItems(res.data)
               history.push(`/movies`)
           })
           .catch((err) => console.error(err.message))
    }

    return(
        <div>
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

                <button className='md-button updatemovieform-button'>Update</button>
            </form>
        </div>
    )
}