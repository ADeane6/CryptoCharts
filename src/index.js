import React from 'react'
import ReactDOM from 'react-dom'

//components
import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyA4yLm1_Tw3uu9129KKJUT-1qCHhz44-rU'

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))