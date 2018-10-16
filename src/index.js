import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = process.env.API_YOUTUBE_URL;

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
             videos: [],
             selectedVideo: null
        };

        this.videoSearch('surfboards');

    }

    videoSearch( term ){
        YTSearch({ key: API_KEY, term: term} , (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    // Uses callback functions
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} // It just updates the apps states
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// Take this component's generated HTML and put it 
// on the page
ReactDOM.render( <App />, document.querySelector(".container"));