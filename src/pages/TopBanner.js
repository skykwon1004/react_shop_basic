import styled from 'styled-components';
import { Inner, BTN } from './common';
import { BsX } from "react-icons/bs";
import { useState } from 'react';

const TopBannerWapper = styled.div`
position: relative;
display: flex;
align-items: center;
background: #f9f9f9;
height: 100px;
overflow: hidden;
transition: height 0.5s;

h2 {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 5px 0;
}

button {
    margin: 0 0 0 20px;
}

.x {
    position: absolute;
    inset: 50% auto auto 50%;
    margin: 0 0 0 600px;
    transform: translate(-100%,-50%);
    font-size: 30px;
}

&.on {
    height: 0;
}

/* &자기자신 */
`


const TopBanner = ({ DEFAULT_CONTENTS }) => {
    const [on, SetOn] = useState(false);
    return (
        <TopBannerWapper className={on ? 'on' : ''}>
            {/* if문 -> on이 ?참이면 on 넣고 :아니면 ''공백 */}
            <Inner>
                <h2>{DEFAULT_CONTENTS[0].title}</h2>
                <p>{DEFAULT_CONTENTS[0].description} <BTN>more</BTN></p>
            </Inner>
            <BsX className='x' onClick={() => SetOn(true)} />
            {/* <BsX className='x' onClick={SetOn(true)} /> 함수바로실행 되서 {}싸주자*/}
            {/* on 붙이는 거는 useRef 써서 할 수도있다 */}
        </TopBannerWapper>
    )
}

export default TopBanner;







// const TopBanner = (props) => {
//     const props.DEFAULT_CONTENTS
// } 원래는 이렇게 씀 props