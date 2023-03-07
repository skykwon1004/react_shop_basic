import styled from "styled-components";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { useRef } from "react";

const Section = styled.section`
padding: 100px 0;
video {
    max-width: 100%;
}
`

const Inner = styled.div`
display: flex;
gap: 100px;
width: 1200px;
margin: 0 auto;
`

const Div = styled.div`
flex: 1;

display: flex;
flex-direction: column;
justify-content: center;
`

const H2 = styled.h2`
font-size: 30px;
font-weight: 700;
margin: 0 0 10px 0;
`

const P = styled.p`
font-size: 14px;
margin: 0 0 30px 0;
`

const VideoPlayWrapper = styled.div`
font-size: 30px;
`

const MainMovie = ({ DEFAULT_CONTENTS }) => {
    const video = useRef(null);
    return (
        <Section>
            <Inner>
                <Div>
                    <video src={process.env.PUBLIC_URL + '/assets/movie.mp4'} ref={video}></video>
                </Div>
                <Div>
                    <H2>{DEFAULT_CONTENTS[1].title}</H2>
                    <P>{DEFAULT_CONTENTS[1].description}</P>
                    <VideoPlayWrapper>
                        <BsPlayCircleFill onClick={() => video.current.play()} />
                        <BsPauseCircleFill onClick={() => video.current.pause()} />
                        {/* ref={video} 선택하고 current.play는 자바스크립트에 만들어놓은거 그냥 쓰면될듯 */}
                    </VideoPlayWrapper>
                </Div>
            </Inner>
        </Section>
    )
}

export default MainMovie;
