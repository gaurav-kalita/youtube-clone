import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';


const KEY = "AIzaSyBK0KI6GW3F2DLPZKgKnRXDbi_RkfRP0Kk";  //constant value shouldnt be changed so its capital KEY

class App extends React.Component {
    state = {videos : [], selectedVideo:null}


//default mounting of form submit to show when the app is started at the beginning
    componentDidMount(){
        this.onTermSubmit('top 10');
    }
// this function will be called whenever anyone submits a form and we need to call the youtube api
//this is from youtube api, we are adding the search term to already def 
// terms in the youtube.js file

    onTermSubmit = async term =>{
        const response = await youtube.get('/search',{                                                                          
            params:{                                
                q:term,
                part: 'snippet',
                maxResults: 10,
                key: `${KEY}`, 
            }
        });

    this.setState(
        { videos: response.data.items,
          selectedVideo: response.data.items[0]  //to change video when new search is made
        })
    }
    onVideoSelect = (video) =>{
        this.setState({selectedVideo:video})
    }

//passing down the videolist to the videolist.js as a prop

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/> 
                <div className="ui grid">
                     <div className="ui row">
                         <div className="eleven wide column">
                             <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                     <div className="five wide column">
                        <VideoList 
                           onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}
                        />
                     </div>
                </div>
             </div>
             
               
            </div>
        )
    }
}

export default App;