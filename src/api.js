import axios from 'axios'

const SearchImage = async(term) => {
    const url = ' '
    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })

    console.log(response)
}

export default SearchImage 