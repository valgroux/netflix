import axios from 'axios'

export const getMoovieOfYear = async () => {
    try {
        const response = await axios
            .get('https://api.themoviedb.org/3/discover/movie/?certification_country=FR&certification=R&sort_by=vote_average.desc', {
                params: {
                    api_key: 'bb8707cd4517d45507a596bcac3064a4'
                }
            })
        return response.data.results
    } catch (error) {
        console.log(error)
    }
}