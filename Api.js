const apiKey = '91dc49c865c52d9df54969cc59a240a3';  

const options = {  
    method: 'GET',  
    headers: { accept: 'application/json' }  
};  

const fetchMovies = async () => {  
    try {  
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);  
        const data = await response.json();  
        displayMovies(data.results);  
    } catch (error) {  
        console.error('Error fetching movie data:', error);  
    }  
};  

const displayMovies = (movies) => {  
    const container = document.getElementById('movie-container');  
    container.innerHTML = '';  

    movies.forEach(movie => {  
        const movieElement = document.createElement('div');  
        movieElement.className = 'movie';  
        movieElement.innerHTML = `  
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">  
            <h3>${movie.title}</h3>  
            <p>Release Date: ${movie.release_date}</p>  
            <p>Rating: ${movie.vote_average}</p>  
        `;  
        container.appendChild(movieElement);  
    });  
};  

document.addEventListener('DOMContentLoaded', fetchMovies); 