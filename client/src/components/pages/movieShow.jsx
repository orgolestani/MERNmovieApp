import React from 'react'

export default function movieShow(props) {
    const { movieNamem, rating, createrAt } = props.movies;

    return (
        <div>
            <h1>Movie Name: {movieNamem}</h1>
            <h1>Rating: {rating}</h1>
            <h1>Created at: {createrAt}</h1>
        </div>
    )
}
