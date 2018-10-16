import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = process.env.API_YOUTUBE_URL;




class App extends Component{

    constructor(props){
        super(props);
        this.state = { videos: []};

        YTSearch({ key: API_KEY, term: 'surfboardss'} , (data) => {
            this.setState({videos: data});
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take this component's generated HTML and put it 
// on the page
ReactDOM.render( <App />, document.querySelector(".container"));