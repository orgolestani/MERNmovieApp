// const PORT = process.env.PORT || 8080
const API = process.env.NODE_ENV === 'production'? 'https://og-mern-movieapp.herokuapp.com':'http://localhost:8080'


export default async function getAllMovies() {
    try {
        return await fetch(`${API}/movies/all`)
            .then((res) => { return res.json() })
            .then((results) => results.data)
    } catch (error) {
        console.log(error);
    }
}



// function getAllMoviesFromAPI() {
//     return fetch(api).then((res) => {
//       return res.json();
//     });
//   }
//   // return array of all objects in collection
//  export async function getMoviesList() {
//     try {
//       let movieJson = await getAllMoviesFromAPI();
//       console.log(movieJson);
//     } catch (movieJson) {}
//   }

// export default async function getAllMovies(){
//     try{
//         return await fetch (API + 'all')
//         .then ((res)=>{return res.json()})
//         .then (results => {return results.data})
//     }catch (error){
//         console.log(error);
//     }
    
// }

// export async function saveMovietodv(movieToSave) {
//     try {
//         const options = {
//             method: POST,
//             body: { movie: movieToSave }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }


// function getAllMoviesFromAPI() {
//     return fetch(api).then((res) => {
//       return res.json();
//     });
//   }
//   // return array of all objects in collection
//   async function getMoviesList() {
//     try {
//       let movieJson = await getAllMoviesFromAPI();
//       console.log(movieJson);
//     } catch (movieJson) {}
//   }