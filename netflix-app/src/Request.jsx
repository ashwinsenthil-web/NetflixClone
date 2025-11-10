const API_KEY="b8fbe78bf399dc16d1342516df985f4e"

const request={
    originals: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
    tv:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`,
    now_playing:`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    top_rated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
}

export default request

