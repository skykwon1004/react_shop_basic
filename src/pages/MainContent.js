import { BTN, Inner } from "./common";
import styles from '../css/MainContent.module.scss';

const MainContent = ({ DEFAULT_CONTENTS, DEFAULT_PRODUCT }) => {
    //console.log(DEFAULT_CONTENTS, DEFAULT_PRODUCT);
    //console.log(styles)
    return (
        <section className={styles.MainContent}>
            <h2>{DEFAULT_CONTENTS[0].title}</h2>
            <p>{DEFAULT_CONTENTS[0].description}</p>
            <Inner className={styles.inner}>
                {
                    DEFAULT_PRODUCT.slice(0, 3).reverse().map((product, index) => {
                        //slice(0, 3) -> 배열 자르기 1~3번 이미지만 보이게
                        //slice(0, 3).reverse() -> 배열을 거꾸로 자르기 ex 최신상품 앞에 보이게 할 때
                        return (
                            <div className="itm" key={product.id}>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + `/assets/lesedilarona0${index + 1}.jpg`} />
                                </figure>
                                <p>{product.title}</p>
                                <BTN>구매하기</BTN>
                            </div>
                        )
                    })
                }
            </Inner>
        </section>
    )
}

export default MainContent;