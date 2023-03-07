import { useRef } from 'react';
import YouTube from 'react-youtube';

const MainYoutube = () => {
    const movie = useRef(null);

    const option = {
        width: '100%',
        height: '600',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
            controls: 0,
        },
    }

    const playVideo = e => {
        //e.target.playVideo();
        console.log('play');
    }

    const pauseVideo = () => {
        console.log(movie.current)
        movie.current.stopVideo();
    }

    return (
        <>
            <YouTube videoId="2g811Eo7K8U" opts={option} onReady={playVideo} ref={movie} />
            {/* <button>play</button>
            <button onClick={pauseVideo}>pause</button> */}
        </>
    )
}

export default MainYoutube;


// https://www.npmjs.com/package/react-youtube 참고