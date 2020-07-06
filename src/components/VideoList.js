import React from 'react';
import VideoItem from './VideoItem'

//taking the videos props from the app.js file, we can use {props.videos} or the below es2016
const VideoList = ({videos, onVideoSelect}) =>{
    const renderedList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId}onVideoSelect = {onVideoSelect} video = {video}/>;
    });

    return <div className="ui relaxed divided list">
        {renderedList}
    </div>
};

export default VideoList