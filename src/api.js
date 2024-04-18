import axios from 'axios'

const SearchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=F-PuMkg8GExsQssXa2ifAvvi03gbSsor2w0jZ92klac'
    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(response) 
    return response.data.results
}

export default SearchImage 