import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import MainSlide from "react-slick";
import { Inner } from "./common";
import { BTN } from "./common";
import { useEffect, useRef, useState } from "react";
import '../css/MainVisual.scss';


const MainVisual = ({ DEFAULT_CONTENTS }) => {
    const option = {
        arrows: false,
        afterChange: idx => setSNum(idx)
        // num 번호 받기위해
    }

    const s = useRef(null);
    //useRef는 document.querySelector()라고 생각하면 됨 선택자
    const [sNum, setSNum] = useState();

    useEffect(() => {
        setSNum(0);
    }, [])

    return (
        <section className="MainVisual">
            <MainSlide
                {...option}
                ref={s}
                className={`MainSlide`}
            >
                {
                    DEFAULT_CONTENTS.map((slideItm, slideIndx) => {
                        return (
                            <div key={slideIndx} className={`itm itm0${slideIndx + 1} ${slideIndx === sNum ? 'on' : ''}`}>
                                <Inner className="inner">
                                    <h2>{slideItm.title}</h2>
                                    <p>{slideItm.description}</p>
                                    <BTN color={slideItm.color}><Link to='/'>more</Link></BTN>
                                </Inner>
                            </div>
                        )
                    })
                }
            </MainSlide>
            <div className="tab">{DEFAULT_CONTENTS[sNum]?.title}</div>
            <div className="arrows">
                {console.log(s.current)}
                <button onClick={() => s.current.slickPrev()} className='prev'>뒤로가기</button>
                <button onClick={() => s.current.slickNext()} className='next'>앞로가기</button>
            </div>
            <div className="num">
               <strong>{sNum && (sNum + 1)}</strong> / <span>{DEFAULT_CONTENTS.length}</span>
            </div>

            <ul className="dots">
                {
                    DEFAULT_CONTENTS.map((_, slideIndx) => {
                        return (
                            <li className={slideIndx === sNum ? 'on' : ''} key={slideIndx}><button onClick={() => s.current.slickGoTo(slideIndx)}>{slideIndx + 1}</button></li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

{/* (_$_, slideIndx) 앞에꺼는 안쓸꺼라서 자리만 남길려고 _$_ 이거써놓은거 */}
export default MainVisual;