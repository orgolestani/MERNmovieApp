import React, { useEffect, useState } from 'react'
// import { saveMovieToD } from './pages/movie-service'
import DataTable from './table.Component'
import getMoviesList from "./Services/movie-service"


export default function Home() {
    const [data, setdata] = useState([])

    async function getDataFromCinema() {
        let moviesArr = await getMoviesList()
        setdata(moviesArr);
    }

    useEffect(getDataFromCinema, [])



    // const [movieName, setMovieName] = useState("");
    // const [rating, setRating] = useState(1);

    // function updateMovieName(event) {
    //     setMovieName(event.target.value)
    // }
    // function updateMovieRating(event) {
    //     setRating(event.target.value)
    // }
    // async function saveMovie(params) {
    //     console.log(movieName, rating);
    //     params.preventDefault();
    //     let response = await saveMovieToDB({ movieName: movieName, rating: rating });
    //     alert(response.message);
    // }

    const movieColumns = [
        {
            name: "movieName",
            label: "Movies Name",
            options: {
                filter: true,
                sort: true,
            }

        },
        {

            name: "rating",
            label: "rating",
            options: {
                filter: true,
                sort: true,
            }
        },
        {

            name: "genre",
            label: "Genre",
            options: {
                filter: true,
                sort: true,
            }
        },
        {

            name: "_id",
            label: "ID",
            options: {
                filter: true,
                sort: true,
            }
        },

    ];

    return (
        <div>
            <h1>tis is home</h1>
            <DataTable title='Ma Table' data={data} columns={movieColumns}/>
        </div>
    )
}
